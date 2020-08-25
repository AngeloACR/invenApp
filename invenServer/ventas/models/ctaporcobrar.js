const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const ctaporcobrarSchema = new mongoose.Schema({
    cobros: [{
        type: Schema.Types.ObjectId,
        ref: 'Cobro',

    }],
    balance: {
        type: Number,
    },
    proforma: {
        type: Schema.Types.ObjectId,
        ref: 'Proforma',
    },
    referencia: {
        type: String,
    },
    cuentaT: {
        type: Schema.Types.ObjectId,
        ref: 'CuentaT',
    },
    codigo: {
        type: String,
    },
})
const Ctaporcobrar = module.exports = mongoose.model("Ctaporcobrar", ctaporcobrarSchema);
