const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const cobroSchema = new mongoose.Schema({
    proforma: {
        type: Schema.Types.ObjectId,
        ref: 'Proforma',
    },
    monto: {
        type: Number,
    },
    movimiento: {
        type: Schema.Types.ObjectId,
        ref: 'MovimientoDiario',
    },
    ctaPorCobrar: {
        type: Schema.Types.ObjectId,
        ref: 'Ctaporcobrar',
    },
    banco: {
        type: Schema.Types.ObjectId,
        ref: 'Banco',
    },
    codigo: {
        type: String,
    },
    fecha: {
        type: Date,
    },

})
const Cobro = module.exports = mongoose.model("Cobro", cobroSchema);
