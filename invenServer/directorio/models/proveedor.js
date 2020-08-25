const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const proveedorSchema = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  ws: {
    type: String,
  },
  codigo: {
    type: String,
  },
  ig: {
    type: String,
  },
  mail: {
    type: String,
  },
  rif: {
    type: String
  },
});

const Proveedor = module.exports = mongoose.model("Proveedor", proveedorSchema);

