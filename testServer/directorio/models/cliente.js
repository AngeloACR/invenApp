const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const clienteSchema = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  codigo: {
    type: String,
  },
  ws: {
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

const Cliente = module.exports = mongoose.model("Cliente", clienteSchema);
