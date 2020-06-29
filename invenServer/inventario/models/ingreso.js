const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const ingresoSchema = mongoose.Schema({
  details: [{
    product: {
            type: Schema.Types.ObjectId,
            ref: 'Producto',
    },
    qty: {
        type: String,
    }
  }],
});

const Ingreso = module.exports = mongoose.model("Ingreso", ingresoSchema);