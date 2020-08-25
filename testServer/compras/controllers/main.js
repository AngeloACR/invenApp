const Compra = require('../models/compra');
const Pago = require('../models/pago');
const Gasto = require('../models/gasto');
const Ctaporpagar = require('../models/ctaporpagar');
const inventarioHandler = require('../../inventario/controllers/main').mainHandler
const finanzasHandler = require('../../finanzas/controllers/main').mainHandler
const spawn = require("child_process").spawn;

const mainHandler = {

    createMovimientoDiario: async function (element) {
        try {
            console.log('Creando movimiento')
            let movimientoDiario = await finanzasHandler.createMovimientoDiario(element)
            return movimientoDiario;
        } catch (error) {
            console.log(error.toString())
        }
    },

    createPago: async function (element) {
        try {
            console.log('Creando pago')
            await pagoHandler.addPago(element)
        } catch (error) {
            console.log(error.toString())
        }
    },

    agregarPagoToCtaPorPagar: async function (pago) {
        try {
            console.log("Empezando a agregar el pago")
            const ctaPorPagarId = pago.ctaPorPagar;

            let response = await ctaPorPagarHandler.getCtaporpagarById(ctaPorPagarId)
            console.log("Obtenida la cuenta por pagar relacionada")

            let ctaPorPagar = response.values;
            let montoActual = ctaPorPagar.balance;
            let monto = pago.monto;
            let pagoId = pago._id;
            console.log("A punto de agregar el pago")
            console.log(pagoId);
            console.log(monto);

            ctaPorPagar.pagos.push(pagoId);

            console.log("Modificando balance")
            console.log("Balance inicial")
            console.log(ctaPorPagar.balance)

            let disminuirData = await this.disminuirBalance(montoActual, monto)

            ctaPorPagar.balance = disminuirData;
            console.log("Balance final")
            console.log(ctaPorPagar.balance)
            await ctaPorPagar.save();


        } catch (error) {

        }
    },

    removePagoFromCtaPorPagar: async function (pago) {
        try {
            const ctaPorPagarId = pago.ctaPorPagar;

            let response = await ctaPorPagarHandler.getCtaporpagarById(ctaPorPagarId)
            let ctaPorPagar = response.values;
            let montoActual = ctaPorPagar.balance;
            let montoTotal = pago.monto;
            let pagoId = pago._id;

            let aumentarData = await this.aumentarBalance(montoActual, montoTotal)


            let i = 0;
            ctaPorPagar.pagos.forEach(pago => {
                if (pago.toString() == pagoId) {
                    ctaPorPagar.pagos.splice(i, 1)
                    return;
                }
                i++
            });

            ctaPorPagar.balance = aumentarData;

            await ctaPorPagar.save();

        } catch (error) {

            console.log(error.toString())
        }
    },

    createCuentaPorPagar: async function (ctaPorPagar) {
        try {

            /* const ctaT = {
                name: `Cuenta por pagar ${proveedor.name}`,
                balance: 0,
                clasificacion: "Pasivo",
                naturaleza: "Haber",
                descripcion: `Cuenta por pagar correspondiente al proveedor ${proveedor.name}`,
            };

            let newCtaT = await ctaTHandler.addCuentaT(ctaT); */

            /*             let ctaTId = newCtaT._id;
             */
            let response = await ctaPorPagarHandler.addCtaporpagar(ctaPorPagar);

            return response.values._id;

        } catch (error) {
            console.log(error.toString())
        }


    },

    deleteCuentaPorPagar: async function (referencia, element) {
        try {
            let aux;
            let ctaPorPagarId;
            let elementId = element._id;
            switch (referencia) {
                case 'Compra':
                    aux = await ctaPorPagarHandler.getCtaporpagarByCompra(elementId);
                    ctaPorPagarId = aux.values._id;
                    break;

                default:
                    aux = await ctaPorPagarHandler.getCtaporpagarByGasto(elementId);
                    ctaPorPagarId = aux.values._id;
                    break;
            }
            let deleteRes = await ctaPorPagarHandler.deleteCtaporpagar(ctaPorPagarId);
        } catch (error) {
            console.log(error.toString())
        }

    },

    aumentarBalance: async function (montoActual, monto) {
        try {

            return new Promise((resolve, reject) => {
                const pythonPath = "./compras/controllers/python/aumentarbalance.py";

                const options = [pythonPath, montoActual, monto];

                const process = spawn('python', options);

                var aumentarData;

                process.stderr.on('data', function (chunk) {
                    console.log(chunk.toString())
                });

                process.stdout.on('data', async (data) => {
                    aumentarData = +data.toString();
                });

                process.on('close', async (code) => {
                    resolve(aumentarData);
                });
            });
        } catch (error) {
            console.log(error.toString())
        }

    },

    disminuirBalance: async function (montoActual, monto) {
        try {

            return new Promise((resolve, reject) => {
                console.log('Empezando la disminucion')
                const pythonPath = "./compras/controllers/python/disminuirbalance.py";

                const options = [pythonPath, montoActual, monto];

                const process = spawn('python', options);

                var disminuirData;

                process.stderr.on('data', function (chunk) {
                    console.log(chunk.toString())
                });

                process.stdout.on('data', async (data) => {
                    console.log('Recibiendo data')
                    disminuirData = +data.toString();
                });

                process.on('close', async (code) => {
                    console.log('Cerrando el proceso')
                    resolve(disminuirData);
                });
            });
        } catch (error) {
            console.log(error.toString())
        }

    },

    removeRef: async function (element) {
        try {
            let productosIngresados = element.productosIngresados;
            let almacenId = element.almacen;
            let compraId = element._id;
            await inventarioHandler.removeCompra(productosIngresados, almacenId, compraId)
        } catch (error) {
            throw error
        }

    },

    agregarProductos: async function (element) {
        try {

            let productosIngresados = element.productosIngresados;
            let almacenId = element.almacen;
            let compraId = element._id;

            await inventarioHandler.agregarProductos(productosIngresados, almacenId, compraId)

        } catch (error) {
            throw error
        }

    },

}

const compraHandler = {

    deleteCompra: async function (id) {
        try {
            let response = await this.getCompraById(id);
            let compra = response.values;
            await mainHandler.deleteCuentaPorPagar("Compra", compra);
            await mainHandler.removeRef(compra);
            let deleteRes = await compra.remove();
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

    addCompra: async function (element) {
        try {
            let newCompra = new Compra(element);

            let compra = newCompra._id;
            let balance = newCompra.montoTotal;
            let referencia = "Compra";
            let ctaPorPagar = {
                compra,
                balance,
                referencia
            }
            let ctaPorPagarId = await mainHandler.createCuentaPorPagar(ctaPorPagar);

            newCompra.ctaPorPagar = ctaPorPagarId;
            switch (newCompra.estado) {
                case 'Por pagar':
                    //                    await mainHandler.aumentarBalance(newCompra);
                    break;

                default:

                    break;
            }
            await mainHandler.agregarProductos(newCompra);
            let compra = await newCompra.save();
            let response = {
                status: true,
                values: compra
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

    getCompras: async function () {
        try {
            const query = {};
            let compras = await Compra.find(query)
            let response = {
                status: true,
                values: compras
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

    getCompraById: async function (id) {
        try {
            const query = { '_id': id };
            let compra = await Compra.findOne(query)
            let response = {
                status: true,
                values: compra
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

    getCompraByProveedor: async function (id) {
        try {
            const query = { 'proveedor': id };
            let compra = await Compra.findOne(query)
            let response = {
                status: true,
                values: compra
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

    getCompraByAlmacen: async function (id) {
        try {
            const query = { 'almacen': id };
            let compra = await Compra.findOne(query)
            let response = {
                status: true,
                values: compra
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

    updateCompra: async function (id, data) {
        try {
            let response = await this.getCompraById(id);
            let compra = response.values;
            compra.name = data.name;
            compra.code = data.code;
            compra = await compra.save();
            response = {
                status: true,
                values: compra
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

const ctaPorPagarHandler = {


    deleteCtaporpagar: async function (id) {
        try {
            let response = await this.getCtaporpagarById(id);
            let ctaporpagar = response.values
            //await this.removeCtaPorPagarFromCuentasT(ctaporpagar);
            let deleteRes = await ctaporpagar.remove();
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

    addCtaporpagar: async function (element) {
        try {
            let newCtaporpagar = new Ctaporpagar(element);
            //await this.addCtaPorPagarToCuentasT(newCtaporpagar);
            let ctaporpagar = await newCtaporpagar.save();

            let response = {
                status: true,
                values: ctaporpagar
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

    getCtasporpagar: async function () {
        try {
            const query = {};
            let ctaporpagars = await Ctaporpagar.find(query)
            let response = {
                status: true,
                values: ctaporpagars
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
    getCtaporpagarById: async function (id) {
        try {
            const query = { '_id': id };
            let ctaporpagar = await Ctaporpagar.findOne(query)
            let response = {
                status: true,
                values: ctaporpagar
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
    getCtaporpagarByProveedor: async function (id) {
        try {
            const query = { 'proveedor': id };
            let ctaporpagar = await Ctaporpagar.findOne(query)
            let response = {
                status: true,
                values: ctaporpagar
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
    getCtaporpagarByCompra: async function (id) {
        try {
            const query = { 'compra': id };
            let ctaporpagar = await Ctaporpagar.findOne(query)
            let response = {
                status: true,
                values: ctaporpagar
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
    getCtaporpagarByGasto: async function (id) {
        try {
            const query = { 'gasto': id };
            let ctaporpagar = await Ctaporpagar.findOne(query)
            let response = {
                status: true,
                values: ctaporpagar
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
    updateCtaporpagar: async function (id, data) {
        try {
            let response = await this.getCtaporpagarById(id);
            let ctaporpagar = response.values
            ctaporpagar = await ctaporpagar.save();
            response = {
                status: true,
                values: ctaporpagar
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


const pagoHandler = {

    deletePago: async function (id) {
        try {
            let response = await this.getPagoById(id);
            let pago = response.values
            await removePagoFromCtaPorPagar(newPago);
            //await this.removeCtaPorPagarFromCuentasT(pago);
            let deleteRes = await pago.remove();
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

    addPago: async function (element) {
        try {

            let newPago = new Pago(element);

            let moveAux = {
                banco: newPago.banco,
                monto: newPago.monto,
                descripcion: `Pago de Cuenta por pagar ${newPago.ctaPorPagar}`,
                signo: "-",
                fecha: newPago.fecha,
            }

            console.log(moveAux);
            let movimiento = await mainHandler.createMovimientoDiario(moveAux)
            console.log('Movimiento creado');
            newPago.movimiento = movimiento

            console.log('Agregando pago a cuenta por pagar');
            await mainHandler.agregarPagoToCtaPorPagar(newPago);
            console.log('Pago agregado a cuenta por pagar');

            let pago = newPago.save();

            let response = {
                status: true,
                values: pago
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

    getPagos: async function () {
        try {
            const query = {};
            let pagos = await Pago.find(query)
                .populate("movimiento")
            let response = {
                status: true,
                values: pagos
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
    getPagoByProforma: async function (id) {
        try {
            const query = { 'proforma': id };
            let pago = await Pago.findOne(query)
            let response = {
                status: true,
                values: pago
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    }, getPagoById: async function (id) {
        try {
            const query = { '_id': id };
            let pago = await Pago.findOne(query)
            let response = {
                status: true,
                values: pago
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
    getPagoByBanco: async function (id) {
        try {
            const query = { 'banco': id };
            let pago = await Pago.findOne(query)
            let response = {
                status: true,
                values: pago
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
    updatePago: async function (id, data) {
        try {
            let response = await this.getPagoById(id);
            let pago = response.values
            pago = await pago.save();
            response = {
                status: true,
                values: ctaporpagar
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

const gastoHandler = {

    deleteGasto: async function (id) {
        try {
            let response = await this.getGastoById(id);
            let gasto = response.values;
            await mainHandler.deleteCuentaPorPagar("Gasto", gasto);
            let deleteRes = await gasto.remove();
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

    addGasto: async function (element) {
        try {
            let newGasto = new Gasto(element);

            let gasto = newGasto._id;
            let balance = newGasto.montoTotal;
            let referencia = "Gasto";
            let ctaPorPagar = {
                gasto,
                balance,
                referencia
            }
            let ctaPorPagarId = await mainHandler.createCuentaPorPagar(ctaPorPagar);
            newGasto.ctaPorPagar = ctaPorPagarId;
            switch (newGasto.estadoPago) {
                case 'Por pagar':
                    //await mainHandler.aumentarBalance(newGasto);
                    break;

                default:
                    break;
            }
            let gasto = await newGasto.save();
            let response = {
                status: true,
                values: gasto
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

    getGastos: async function () {
        try {
            const query = {};
            let gastos = await Gasto.find(query)
            let response = {
                status: true,
                values: gastos
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

    getGastoById: async function (id) {
        try {
            const query = { '_id': id };
            let gasto = await Gasto.findOne(query)
            let response = {
                status: true,
                values: gasto
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

    getGastoByProveedor: async function (id) {
        try {
            const query = { 'proveedor': id };
            let gasto = await Gasto.findOne(query)
            let response = {
                status: true,
                values: gasto
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

    getGastoByAlmacen: async function (id) {
        try {
            const query = { 'almacen': id };
            let gasto = await Gasto.findOne(query)
            let response = {
                status: true,
                values: gasto
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

    updateGasto: async function (id, data) {
        try {
            let response = await this.getGastoById(id);
            let gasto = response.values;
            gasto.name = data.name;
            gasto.code = data.code;
            gasto = await gasto.save();
            response = {
                status: true,
                values: gasto
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


const comprasCtrl = {
    mainHandler,
    compraHandler,
    pagoHandler,
    ctaPorPagarHandler,
    gastoHandler
}

module.exports = comprasCtrl
