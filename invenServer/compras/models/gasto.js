const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const gastoSchema = new mongoose.Schema({
    almacen: {
        type: Schema.Types.ObjectId,
        ref: 'Almacen',
    },
    pagos: [{
        type: Schema.Types.ObjectId,
        ref: 'Pago'
    }],
    codigo: {
        type: String,
    },
    montoTotal: {
        type: Number,
    },
    montoPendiente: {
        type: Number,
    },
    observaciones: {
        type: String,
    },
    estadoPago: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    referencia: {
        type: String,
    },
})

const Gasto = module.exports = mongoose.model("Gasto", gastoSchema);
