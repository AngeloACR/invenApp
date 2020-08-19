const Compra = require('../models/compra');
const inventarioHandler = require('../../inventario/controllers/main').mainHandler

const mainHandler = {
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
            await this.removeCtaPorPagarFromCuentasT(ctaporpagar);
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
            await this.addCtaPorPagarToCuentasT(ctaporpagar);
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

const comprasCtrl = {
    mainHandler,
    compraHandler,
    ctaPorPagarHandler
}

module.exports = comprasCtrl
