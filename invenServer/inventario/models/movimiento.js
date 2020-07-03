const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const movimientoSchema = mongoose.Schema({
  producto: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto',
  }],
  almacen: [{
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
  }],
  qty: {
    type: Number,
  },
  type: {
    type: String,
  },
  unitcost: {
    type: Number,
  },
  reference: {
    type: String,
  }
});

const Movimiento = module.exports = mongoose.model("Movimiento", movimientoSchema);


module.exports.productEntry = async function (move) {
  try {
    const query = { '_id': id };
    let disponibilidad = await this.findOne(query);
    disponibilidad.qty += newDisponibilidad.qty
    disponibilidad = await disponibilidad.save();
    products.entry.push(ingress);
    let response = {
      status: true,
      values: disponibilidad
    }
    return response;
  } catch (error) {         
    let response = {
        status: false,
        msg: error.toString().replace("Error: ", "")
    }
    return response
      }
}

module.exports.productOut = async function (code, qty, egress) {
  try {
    const query = { 'code': code };
    let disponibilidad = await this.findOne(query);
      disponibilidad.qty -= newDisponibilidad.qty
      products.egress.push(egress);
      disponibilidad = await disponibilidad.save();
    let response = {
      status: true,
      values: disponibilidad
    }
    return response;
  } catch (error) { 
            let response = {
            status: false,
            msg: error.toString().replace("Error: ", "")
        }
        return response 
  }
}