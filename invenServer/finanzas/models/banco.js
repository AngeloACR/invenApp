const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;


const bancoSchema = new mongoose.Schema({
  bank: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  codigo: {
    type: String,
  },
  status: {
    type: String,
  },
  alias: {
    type: String,
  },
  saldoInicial: {
    type: Number,
  },
  disponibilidad: {
    type: Schema.Types.ObjectId,
    ref: 'DisponibilidadBancaria',
  },
})

const Banco = module.exports = mongoose.model("Banco", bancoSchema);
