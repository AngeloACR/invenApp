const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const egresoSchema = mongoose.Schema({
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

const Egreso = module.exports = mongoose.model("Egreso", egresoSchema);