const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const ctaporcobrarSchema = new mongoose.Schema({
    cobros: [{
        proforma: {
            type: Schema.Types.ObjectId,
            ref: 'Proforma',
        },
        movimientos: [{
            type: Schema.Types.ObjectId,
            ref: 'MovimientoDiario',
        }],

    }],
    balance: {
        type: Number,
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    cuentaT: {
        type: Schema.Types.ObjectId,
        ref: 'CuentaT',
    },
})
const Ctaporcobrar = module.exports = mongoose.model("Ctaporcobrar", ctaporcobrarSchema);
