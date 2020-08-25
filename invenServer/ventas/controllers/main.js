const Proforma = require('../models/proforma');
const Pedido = require('../models/pedido');
const Ctaporcobrar = require('../models/ctaporcobrar');
const Cobro = require('../models/cobro');
const inventarioHandler = require('../../inventario/controllers/main').mainHandler
const finanzasHandler = require('../../finanzas/controllers/main').mainHandler
const spawn = require("child_process").spawn;

const mainHandler = {

    createMovimientoDiario: async function (element) {
        try {
            console.log("Mandando solicitud al controlador de finanzas")
            let movimientoDiario = await finanzasHandler.createMovimientoDiario(element)
            return movimientoDiario;
        } catch (error) {
            console.log(error.toString())
        }
    },

    createCobro: async function (element) {
        try {
            console.log('Creando cobro')
            await cobroHandler.addCobro(element)
        } catch (error) {
            console.log(error.toString())
        }
    },
    addCobroToCtaPorCobrar: async function (cobro) {
        try {

            console.log("Empezando a agregar cobro")
            const ctaPorCobrarId = cobro.ctaPorCobrar;

            let response = await ctaPorCobrarHandler.getCtaporcobrarById(ctaPorCobrarId)
            console.log("Obteniendo cuenta por cobrar")

            let ctaPorCobrar = response.values;
            console.log(ctaPorCobrar)
            let montoActual = ctaPorCobrar.balance;
            let monto = cobro.monto;
            let cobroId = cobro._id;

            ctaPorCobrar.cobros.push(cobroId);

            let disminuirData = await this.disminuirBalance(montoActual, monto)

            ctaPorCobrar.balance = disminuirData;
            await ctaPorCobrar.save();


        } catch (error) {

            console.log(error.toString())
        }
    },

    removeCobroFromCtaPorCobrar: async function (cobro) {
        try {
            const ctaPorCobrarId = cobro.ctaPorCobrar;

            let response = await ctaPorCobrarHandler.getCtaporcobrarById(ctaPorCobrarId)
            let ctaPorCobrar = response.values;
            let montoActual = ctaPorCobrar.balance;
            let montoTotal = cobro.monto;
            let cobroId = cobro._id;

            let aumentarData = await this.aumentarBalance(montoActual, montoTotal)


            let i = 0;
            ctaPorCobrar.cobros.forEach(cobro => {
                if (cobro.toString() == cobroId) {
                    ctaPorCobrar.cobros.splice(i, 1)
                    return;
                }
                i++
            });

            ctaPorCobrar.balance = aumentarData;

            await ctaPorCobrar.save();

        } catch (error) {

            console.log(error.toString())
        }
    },

    aumentarBalance: async function (montoActual, montoTotal) {
        try {
            return new Promise((resolve, reject) => {

                const pythonPath = "./ventas/controllers/python/aumentarbalance.py";

                const options = [pythonPath, montoActual, montoTotal];

                const process = spawn('python', options);

                var aumentarData;

                process.stdout.on('data', async (data) => {
                    aumentarData = +data.toString();
                });

                process.on('close', async (code) => {
                    resolve(aumentarData)
                });
            });
        } catch (error) {
            console.log(error.toString())
        }

    },

    disminuirBalance: async function (montoActual, monto) {
        try {
            return new Promise((resolve, reject) => {

                const pythonPath = "./ventas/controllers/python/disminuirbalance.py";

                const options = [pythonPath, montoActual, monto];

                const process = spawn('python', options);

                var disminuirData;

                process.stdout.on('data', async (data) => {
                    disminuirData = +data.toString();
                });

                process.on('close', async (code) => {
                    resolve(disminuirData)
                });
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

    desbloquearProductos: async function (element) {
        try {

            let productosPedidos = element.productosPedidos;
            let pedidoId = element._id;

            await inventarioHandler.desbloquearProductos(productosPedidos, pedidoId)

        } catch (error) {
            throw error
        }

    },

    removeProformaAsociada: async function (element) {
        try {
            if (element.proforma) {

                let proformaId = element.proforma;

                let response = await proformaHandler.deleteProforma(proforma);
            }

        } catch (error) {
            throw error
        }

    },

    createCuentaPorCobrar: async function (ctaPorCobrar) {
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

            let response = await ctaPorCobrarHandler.addCtaporcobrar(ctaPorCobrar);
            console.log(response);
            return response.values._id;

        } catch (error) {
            console.log(error.toString())
        }
    },

    deleteCuentaPorCobrar: async function (referencia, element) {
        try {
            let aux;
            let ctaPorCobrarId;
            let elementId = element._id;
            switch (referencia) {
                case 'Proforma':
                    aux = await ctaPorCobrarHandler.getCtaporcobrarByProforma(elementId);
                    ctaPorCobrarId = aux.values._id;
                    break;

                default:
                    break;
            }
            let deleteRes = await ctaPorCobrarHandler.deleteCtaporcobrar(ctaPorCobrarId);
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
            await mainHandler.desbloquearProductos(pedido);
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
            await mainHandler.deleteCuentaPorCobrar("Proforma", proforma);
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

    addProforma: async function (element) {
        try {
            let newProforma = new Proforma(element)
            let proforma = newProforma._id;
            let balance = newProforma.montoTotal;
            let referencia = "Proforma";
            let ctaPorCobrar = {
                proforma,
                balance,
                referencia
            }
            let ctaPorCobrarId = await mainHandler.createCuentaPorCobrar(ctaPorCobrar);
            newProforma.ctaPorCobrar = ctaPorCobrarId;
            switch (newProforma.estadoCobro) {
                case 'Por cobrar':
                    //await mainHandler.aumentarBalance(newProforma);
                    break;

                default:
                    break;
            }

            await mainHandler.addProformaToPedido(newProforma);
            proforma = await newProforma.save()

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
    getProformaByCliente: async function (id) {
        try {
            const query = { 'cliente': id };
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
    getProformaByAlmacen: async function (id) {
        try {
            const query = { 'almacen': id };
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
            //await this.removeCtaPorCobrarFromCuentasT(ctaporcobrar);
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
            console.log('here3')

            let newCtaporcobrar = new Ctaporcobrar(element);
            //await this.addCtaPorCobrarToCuentasT(ctaporcobrar);
            let ctaporcobrar = await newCtaporcobrar.save();
            console.log('here4')

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
    getCtaporcobrarByProforma: async function (id) {
        try {
            const query = { 'proforma': id };
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

const cobroHandler = {


    deleteCobro: async function (id) {
        try {
            let response = await this.getCobroById(id);
            let cobro = response.values
            await mainHandler.removeCobroFromCtaPorCobrar(cobro);
            let deleteRes = await cobro.remove();
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

    addCobro: async function (element) {
        try {

            let newCobro = new Cobro(element);
            //await this.addCtaPorCobrarToCuentasT(cobro);
            console.log("creando movimiento")
            let moveAux = {
                banco: newCobro.banco,
                monto: newCobro.monto,
                descripcion: `Cobro de Cuenta por cobrar ${newCobro.ctaPorCobrar}`,
                signo: "+",
                fecha: newCobro.fecha,
            }
            console.log(moveAux)
            let movimiento = await mainHandler.createMovimientoDiario(moveAux)
            console.log("movimiento crado")
            console.log(movimiento)

            newCobro.movimiento = movimiento;
            console.log("Agregando cobro a cuenta por cobrar")

            await mainHandler.addCobroToCtaPorCobrar(newCobro);
            console.log("Cobro agregado")

            let cobro = newCobro.save();

            let response = {
                status: true,
                values: cobro
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

    getCobros: async function () {
        try {
            const query = {};
            let cobros = await Cobro.find(query)
                .populate("movimiento")
            let response = {
                status: true,
                values: cobros
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
    getCobroByProforma: async function (id) {
        try {
            const query = { 'proforma': id };
            let cobro = await Cobro.findOne(query)
            let response = {
                status: true,
                values: cobro
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    }, getCobroById: async function (id) {
        try {
            const query = { '_id': id };
            let cobro = await Cobro.findOne(query)
            let response = {
                status: true,
                values: cobro
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
    getCobroByBanco: async function (id) {
        try {
            const query = { 'banco': id };
            let cobro = await Cobro.findOne(query)
            let response = {
                status: true,
                values: cobro
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
    updateCobro: async function (id, data) {
        try {
            let response = await this.getCobroById(id);
            let cobro = response.values
            cobro = await cobro.save();
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
    ctaPorCobrarHandler,
    cobroHandler
}

module.exports = ventasHandler;
