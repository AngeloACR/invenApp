const Proforma = require('../models/proforma');
const Pedido = require('../models/pedido');
const inventarioHandler = require('../../inventario/controllers/main').mainHandler
const finanzasHandler = require('../../finanzas/controllers/main').mainHandler

const mainHandler = {

    createMovimientoDiario: async function (element) {
        try {
            let movimientoDiario = await finanzasHandler.createMovimientoDiario(element)
            return movimientoDiario;
        } catch (error) {
            console.log(error.toString())
        }
    },

    addProformaToCtaPorCobrar: async function (element) {
        try {
            let cliente = element.pedido.cliente;
            let cobro = {

                proforma: element._id
            }
            let response = await ctaPorCobrarHandler.getCtaporcobrarByCliente(cliente);
            let ctaporcobrar = response.values;
            ctaporcobrar.cobros.push(cobro);
            ctaporcobrar = await ctaporcobrar.save();
        } catch (error) {

            console.log(error.toString())
        }
    },

    removeProformaFromCtaPorCobrar: async function (element) {
        try {
        } catch (error) {

            console.log(error.toString())
        }
    },


    aumentarBalance: async function (proforma) {
        try {
            const clienteId = proforma.cliente;

            let response = ctaPorCobrarHandler.getCtaporcobrarByCliente(clienteId)
            let ctaPorCobrar = response.values;
            let montoActual = ctaPorCobrar.balance;
            let montoTotal = proforma.montoTotal;

            const pythonPath = "./python/aumentarbalance.py";

            const options = [pythonPath, montoActual, montoTotal];

            const process = spawn('python', options);

            var aumentarData;

            process.stdout.on('data', async (data) => {
                aumentarData = data.toString();
            });

            process.on('close', async (code) => {
                let cobro = {
                    proforma: proforma._id,
                    montoPendiente: montoTotal
                }
                ctaPorCobrar.balance = aumentarData.balanceDespues;
                ctaPorCobrar.cobros.push(cobro)
                await ctaPorCobrar.save();
                return {
                    success: true,
                    msg: aumentarData
                };
            });
        } catch (error) {
            console.log(error.toString())
        }

    },

    agregarCobro: async function (proformaId, cobro) {
        try {
            /*             const cliente = proforma.cliente;
                        let response = proformaHandler.getCtaporcobrarByCliente(cliente)
                        let proforma = response.values;
             */

            let response = proformaHandler.getProformaById(proformaId)
            let proforma = response.values;

            let moveAux = {
                banco: cobro.banco,
                monto: cobro.monto,
                descripcion: `Cobro de proforma ${proformaId}`,
                signo: "+",
                fecha: Date.today(),
            }
            let movimiento = await mainHandler.createMovimientoDiario(moveAux)

            let montoPagado = cobro.monto;

            proforma.cobros.movimientos.push(movimiento._id)

            const pythonPathB = "./python/agregarCobro.py";

            const optionsB = [pythonPathB, proforma.cobros.montoPendiente, proforma.cobros.montoPagado, montoPagado];

            const processB = spawn('python', optionsB);

            var cobroData

            processB.stdout.on('data', async (data) => {
                cobroData = data;
            });

            process.on('close', async (code) => {
                proforma.cobros.montoPendiente = cobroData.montoPendiente
                proforma.cobros.montoPagado = cobroData.montoPagado
            });


            await this.disminuirBalance(proforma, movimiento)
            await proforma.save();


            return {
                success: true,
                msg: disminuirData
            };
        } catch (error) {
            console.log(error.toString())
        }

    },


    disminuirBalance: async function (proforma, movimiento) {
        try {
            const cliente = proforma.cliente;
            let response = ctaPorCobrarHandler.getCtaporcobrarByCliente(cliente)
            let ctaPorCobrar = response.values;
            let montoActual = ctaPorCobrar.balance;
            let montoMovimiento = movimiento.monto;

            const pythonPath = "./python/disminuirbalance.py";

            const options = [pythonPath, montoActual, montoMovimiento];

            const process = spawn('python', options);

            var disminuirData;

            process.stdout.on('data', async (data) => {
                disminuirData = data;
            });

            process.on('close', async (code) => {
                ctaPorCobrar.balance = disminuirData.balanceDespues;

                await ctaPorCobrar.save();
            });
        } catch (error) {
            console.log(error.toString())
        }

    },

    addProformaToPedido: async function (element) {
        try {
            let pedidoId = element.pedido
            let response = await pedidoHandler.getPedidoById(pedidoId);
            let pedido = response.values;
            pedido.proforma = element._id
            await pedido.save();
        } catch (error) {
            throw error
        }

    },

    removeProformaFromPedido: async function (element) {
        try {
            let pedidoId = element.pedido
            let response = await pedidoHandler.getPedidoById(pedidoId);
            let pedido = response.values;
            pedido.proforma = null
            await pedido.save();
        } catch (error) {
            throw error
        }

    },

    bloquearProductos: async function (element) {
        try {

            let productosPedidos = element.productosPedidos;
            let pedidoId = element._id;

            await inventarioHandler.bloquearProductos(productosPedidos, pedidoId)

        } catch (error) {
            throw error
        }

    },

    removeProformaAsociada: async function (element) {
        try {

            let proformaId = element.proforma;

            let response = await proformaHandler.deleteProforma(proforma);

        } catch (error) {
            throw error
        }

    },

    createCuentaPorCobrarDeCliente: async function (cliente) {
        try {

            /*             const ctaT = {
                            name: `Cuenta por cobrar ${cliente.name}`,
                            balance: 0,
                            clasificacion: "Activo",
                            naturaleza: "Debe",
                            descripcion: `Cuenta por cobrar correspondiente al cliente ${cliente.name}`,
                        };
            
                        let newCtaT = await ctaTHandler.addCuentaT(ctaT);
            
                        let ctaTId = newCtaT._id; */
            let clienteId = cliente._id;

            let ctaPorPagar = {
                cliente: clienteId,
            }

            let newCtaPorPagar = await ctaPorCobrarHandler(ctaPorPagar);

            return newCtaPorPagar._id;

        } catch (error) {
            console.log(error.toString())
        }
    },

    deleteCuentaPorCobrarDeCliente: async function (cliente) {
        try {

        } catch (error) {
            console.log(error.toString())
        }

    },

}

const pedidoHandler = {



    deletePedido: async function (id) {
        try {
            let response = await this.getPedidoById(id);
            let pedido = response.values;
            await mainHandler.removePedidoFromDisponibilidad(pedido);
            await mainHandler.removeProformaAsociada(pedido);
            let deleteRes = await pedido.remove();
            response = {
                status: true,
                values: deleteRes
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    addPedido: async function (element) {
        try {
            let newPedido = new Pedido(element);
            await mainHandler.bloquearProductos(newPedido);
            let pedido = await newPedido.save()

            let response = {
                status: true,
                values: pedido
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getPedidos: async function () {
        try {
            const query = {};
            let pedidos = await Pedido.find(query)
                .populate('productosPedidos.producto')
                .populate('cliente')
                .populate('vendedor')
            let response = {
                status: true,
                values: pedidos
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    getPedidoById: async function (id) {
        try {
            const query = { '_id': id };
            let pedido = await Pedido.findOne(query)
            let response = {
                status: true,
                values: pedido
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    updatePedido: async function (id, data) {
        try {
            let response = await this.getPedidoById(id);
            let pedido = response.values;
            pedido.name = data.name;
            pedido.code = data.code;
            pedido = await pedido.save();
            response = {
                status: true,
                values: pedido
            }
            return response

        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    }
}

const proformaHandler = {

    deleteProforma: async function (id) {
        try {
            let response = await this.getProformaById(id);
            let proforma = response.values;
            await mainHandler.removeProformaFromPedido(proforma);
            let deleteRes = await proforma.remove();
            response = {
                status: true,
                values: deleteRes
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    addProforma: async function (element, cobros) {
        try {
            let newProforma = new Proforma(element)
            await mainHandler.aumentarBalance(newProforma);
            if (cobros && cobros.length) {

                cobros.forEach(async (cobro) => {


                    await mainHandler.agregarCobro(newProforma, cobro)
                    /*                     await mainHandler.disminuirBalance(newProforma, movimiento);
                     */
                });

            }
            await mainHandler.addProformaToPedido(newProforma);
            let proforma = await newProforma.save()

            let response = {
                status: true,
                values: proforma
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getProformas: async function () {
        try {
            const query = {};
            let proformas = await Proforma.find(query)
                .populate('productosAutorizados.producto')
                .populate('pedido')
                .populate('cliente')
            let response = {
                status: true,
                values: proformas
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    getProformaById: async function (id) {
        try {
            const query = { '_id': id };
            let proforma = await Proforma.findOne(query)
            let response = {
                status: true,
                values: proforma
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    updateProforma: async function (id, data) {
        try {
            let response = await this.getProformaById(id);
            let proforma = response.values;
            proforma.name = data.name;
            proforma.code = data.code;
            proforma = await proforma.save();
            response = {
                status: true,
                values: proforma
            }
            return response

        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    }
}

const ctaPorCobrarHandler = {


    deleteCtaporcobrar: async function (id) {
        try {
            let response = await this.getCtaporcobrarById(id);
            let ctaporcobrar = response.values
            await this.removeCtaPorCobrarFromCuentasT(ctaporcobrar);
            let deleteRes = await ctaporcobrar.remove();
            response = {
                status: true,
                values: deleteRes
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    addCtaporcobrar: async function (element) {
        try {
            let newCtaporcobrar = new Ctaporcobrar(element);
            await this.addCtaPorCobrarToCuentasT(ctaporcobrar);
            let ctaporcobrar = await newCtaporcobrar.save();

            let response = {
                status: true,
                values: ctaporcobrar
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getCtasporcobrar: async function () {
        try {
            const query = {};
            let ctaporcobrars = await Ctaporcobrar.find(query)
            let response = {
                status: true,
                values: ctaporcobrars
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    getCtaporcobrarById: async function (id) {
        try {
            const query = { '_id': id };
            let ctaporcobrar = await Ctaporcobrar.findOne(query)
            let response = {
                status: true,
                values: ctaporcobrar
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    getCtaporcobrarByCliente: async function (id) {
        try {
            const query = { 'cliente': id };
            let ctaporcobrar = await Ctaporcobrar.findOne(query)
            let response = {
                status: true,
                values: ctaporcobrar
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    updateCtaporcobrar: async function (id, data) {
        try {
            let response = await this.getCtaporcobrarById(id);
            let ctaporcobrar = response.values
            ctaporcobrar = await ctaporcobrar.save();
            response = {
                status: true,
                values: ctaporcobrar
            }
            return response

        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    }
}

const ventasHandler = {
    mainHandler,
    proformaHandler,
    pedidoHandler,
    ctaPorCobrarHandler
}

module.exports = ventasHandler;
