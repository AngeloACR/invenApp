const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const compraSchema = new mongoose.Schema({
  productosIngresados: [{
    producto: {
      type: Schema.Types.ObjectId,
      ref: 'Producto',
    },
    qty: {
      type: Number,
    },
    unitcost: {
      type: Number,
    }
  }],
  codigo: {
    type: String,
  },
  almacen: {
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
  },
  ctaPorPagar: {
    type: Schema.Types.ObjectId,
    ref: 'Ctaporpagar',
  },
  fecha: {
    type: Date,
  },
  estado: {
    type: String,
  },
  montoTotal: {
    type: Number,
  },
  observaciones: {
    type: String,
  },
  referencia: {
    type: String,
  },
  proveedor: {
    type: Schema.Types.ObjectId,
    ref: 'Proveedor',
  }
})

const Compra = module.exports = mongoose.model("Compra", compraSchema);
