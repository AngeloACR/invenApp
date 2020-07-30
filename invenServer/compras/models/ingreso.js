const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const ingresoSchema = new mongoose.Schema({
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
  almacen: {
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
  },
  fecha: {
    type: Date,
  },
  estado: {
    type: String,
  },
  observaciones: {
    type: String,
  },
  referencia: {
    type: String,
  },
  proveedor: {
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
  }
})
/* .post('save', alterDisponibilidad)
  .post('remove', ingresoDeleted);
 */
async function ingresoDeleted(element) {
  try {


    const Producto = require('./producto');
    const Almacen = require('./almacen');
    const Disponibilidad = require('./disponibilidad');

    let productosIngresados = element.productosIngresados;
    let almacenId = element.almacen;
    let ingresoId = element._id;
    let piLength = productosIngresados.length;

    for (let i = 0; i < piLength; i++) {
      let productoId = productosIngresados[i].producto;
      let qty = productosIngresados[i].qty;

      let queryA = { 'producto': productoId }
      let disponibilidad = await Disponibilidad.findOne(queryA)

      let dLength = disponibilidad.dispoAlmacen.length;
      for (let j = 0; j < dLength; j++) {
        if (almacenId == disponibilidad.dispoAlmacen[j].almacen.toString()) {
          disponibilidad.dispoAlmacen[j].qty -= qty;
          break;
        }

      }

      disponibilidad.qtyDisponible -= qty;
      for (let j = 0; j < disponibilidad.ingresos.length; j++) {
        if (disponibilidad.ingresos[j] == ingresoId) {
          disponibilidad.ingresos.splice(j, 1);
        }
      }
      disponibilidad = await disponibilidad.save();
    }
    next()



  } catch (error) {

  }

}

async function alterDisponibilidad(element) {
  try {

    const Producto = require('./producto');
    const Almacen = require('./almacen');
    const Disponibilidad = require('./disponibilidad');

    let productosIngresados = element.productosIngresados;
    let almacenId = element.almacen;
    let ingresoId = element._id;
    let piLength = productosIngresados.length;

    for (let i = 0; i < piLength; i++) {
      let productoId = productosIngresados[i].producto;
      let qty = productosIngresados[i].qty;

      let queryA = { 'producto': productoId }
      let disponibilidad = await Disponibilidad.findOne(queryA)

      let dLength = disponibilidad.dispoAlmacen.length;
      for (let j = 0; j < dLength; j++) {
        if (almacenId == disponibilidad.dispoAlmacen[j].almacen.toString()) {
          disponibilidad.dispoAlmacen[j].qty += qty;
          break;
        }

      }

      disponibilidad.qtyDisponible += qty;
      disponibilidad.ingresos.push(ingresoId);
      disponibilidad = await disponibilidad.save();
    }
    next()

  } catch (error) {

  }

}

const Ingreso = module.exports = mongoose.model("Ingreso", ingresoSchema);

module.exports.removeRef = async function (element) {
  try {
    const Disponibilidad = require('./disponibilidad');
    let productosIngresados = element.productosIngresados;
    let almacenId = element.almacen;
    let ingresoId = element._id;
    await Disponibilidad.removeIngreso(productosIngresados, almacenId, ingresoId)
  } catch (error) {
    throw error
  }

}

module.exports.agregarProductos = async function (element) {
  try {

    const Disponibilidad = require('./disponibilidad');

    let productosIngresados = element.productosIngresados;
    let almacenId = element.almacen;
    let ingresoId = element._id;

    await Disponibilidad.agregarProductos(productosIngresados, almacenId, ingresoId)

  } catch (error) {
    throw error
  }

}

module.exports.deleteIngreso = async function (id) {
  try {
    const query = { "_id": id };
    let ingreso = await this.findOne(query);
    await this.removeRef(ingreso);
    let deleteRes = await ingreso.remove();
    let response = {
      status: true,
      values: deleteRes
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

module.exports.addIngreso = async function (newIngreso) {
  try {
    await this.agregarProductos(newIngreso);
    let ingreso = await newIngreso.save();
    let response = {
      status: true,
      values: ingreso
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

module.exports.getIngresos = async function () {
  try {
    const query = {};
    let ingresos = await this.find(query)
    let response = {
      status: true,
      values: ingresos
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
module.exports.getIngreso = async function (id) {
  try {
    const query = { '_id': id };
    let ingreso = await this.findOne(query)
    let response = {
      status: true,
      values: ingreso
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
module.exports.updateIngreso = async function (data) {
  try {
    const query = { '_id': data.id }
    let ingreso = await this.findOne(query);
    ingreso.name = data.name;
    ingreso.code = data.code;
    ingreso = await ingreso.save();
    let response = {
      status: true,
      values: ingreso
    }
    return response

  } catch (error) {
    let response = {
      status: false,
      msg: error.toString().replace("Error: ", "")
    }
    return response
  }
}