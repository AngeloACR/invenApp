const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const proformaSchema = new mongoose.Schema({
    pedido: {
        type: Schema.Types.ObjectId,
        ref: 'Pedido',
    },
    fecha: {
        type: Date,
    },
    productosAutorizados: [{
        producto: {
            type: Schema.Types.ObjectId,
            ref: 'Producto',
        },
        qty: {
            type: Number,
        },
        montoProducto: {
            type: Number,
        },
        precio: {
            type: Number,
        }
    }],
    montoTotal: {
        type: Number,
    },
    status: {
        type: String,
    },
    referencia: {
        type: String,
    },
    reciboDeCobro: {
        type: String,
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    almacen: {
        type: Schema.Types.ObjectId,
        ref: 'Almacen',
    },
    ctaPorCobrar: {
        type: Schema.Types.ObjectId,
        ref: 'Cuentaporcobrar',
    },
    observaciones: {
        type: String,
    },
    codigo: {
        type: String,
    },
})
const Proforma = module.exports = mongoose.model("Proforma", proformaSchema);