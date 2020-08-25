const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'Cliente',
  },
  vendedor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  productosPedidos: [{
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
  fecha: {
    type: Date,
  },
  montoTotal: {
    type: Number,
  },
  estado: {
    type: String,
  },
  condicionVenta: {
    type: String,
  },
  observaciones: {
    type: String,
  },
  proforma: {
    type: Schema.Types.ObjectId,
    ref: 'Proforma',
  },
  codigo: {
    type: String,
  },
})
const Pedido = module.exports = mongoose.model("Pedido", pedidoSchema);
