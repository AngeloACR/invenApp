const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const pagoSchema = new mongoose.Schema({
    compra: {
        type: Schema.Types.ObjectId,
        ref: 'Compra',
    },
    gasto: {
        type: Schema.Types.ObjectId,
        ref: 'Gasto',
    },
    ctaPorPagar: {
        type: Schema.Types.ObjectId,
        ref: 'Ctaporpagar',
    },
    referencia: {
        type: String,
    },
    monto: {
        type: Number,
    },
    fecha: {
        type: Date,
    },
    movimiento: {
        type: Schema.Types.ObjectId,
        ref: 'MovimientoDiario',
    },
    banco: {
        type: Schema.Types.ObjectId,
        ref: 'Banco',
    },
    codigo: {
        type: String,
    },

})
const Pago = module.exports = mongoose.model("Pago", pagoSchema);
