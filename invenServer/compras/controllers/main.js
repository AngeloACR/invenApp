const Ingreso = require('../models/ingreso');
const inventarioHandler = require('../../inventario/controllers/main').mainHandler

const mainHandler = {
    removeRef: async function (element) {
        try {
            let productosIngresados = element.productosIngresados;
            let almacenId = element.almacen;
            let ingresoId = element._id;
            await inventarioHandler.removeIngreso(productosIngresados, almacenId, ingresoId)
        } catch (error) {
            throw error
        }

    },

    agregarProductos: async function (element) {
        try {

            let productosIngresados = element.productosIngresados;
            let almacenId = element.almacen;
            let ingresoId = element._id;

            await inventarioHandler.agregarProductos(productosIngresados, almacenId, ingresoId)

        } catch (error) {
            throw error
        }

    },

}

const ingresoHandler = {

    deleteIngreso: async function (id) {
        try {
            let response = await this.getIngresoById(id);
            let ingreso = response.values;
            await mainHandler.removeRef(ingreso);
            let deleteRes = await ingreso.remove();
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

    addIngreso: async function (element) {
        try {
            let newIngreso = new Ingreso(element);
            await mainHandler.agregarProductos(newIngreso);
            let ingreso = await newIngreso.save();
            let response = {
                status: true,
                values: ingreso
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

    getIngresos: async function () {
        try {
            const query = {};
            let ingresos = await Ingreso.find(query)
            let response = {
                status: true,
                values: ingresos
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
    getIngresoById: async function (id) {
        try {
            const query = { '_id': id };
            let ingreso = await Ingreso.findOne(query)
            let response = {
                status: true,
                values: ingreso
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
    updateIngreso: async function (id, data) {
        try {
            let response = await this.getIngresoById(id);
            let ingreso = response.values;
            ingreso.name = data.name;
            ingreso.code = data.code;
            ingreso = await ingreso.save();
            response = {
                status: true,
                values: ingreso
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

const finanzasCtrl = {
    mainHandler,
    ingresoHandler,
}

module.exports = finanzasCtrl
