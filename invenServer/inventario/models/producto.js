const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const productoSchema = mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  entry: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingreso',
  }],
  egress: [{
    type: Schema.Types.ObjectId,
    ref: 'Egreso',
  }],
  qty: {
    type: Number,
  },
  proveedor: {
    type: Schema.Types.ObjectId,
    ref: 'Proveedor',
  },
  brand: {
    type: String,
  },  
  location: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Locacion',
  },
  price: {
    type: Number,
  }
});

const Producto = module.exports = mongoose.model("Producto", productoSchema);


module.exports.deleteProducto = async function (id) {
    try {
        const query = { "_id": id };
        return await this.findOneAndRemove(query);
    } catch (error) {
        throw error;
    }
}

module.exports.addProducto = async function (newProducto) {
  try {
    let producto = await newProducto.save();
    let response = {
      status: true,
      values: producto
    }
    return response;
  } catch (error) { throw error; }
}


module.exports.entryProducto = async function (code, qty, entr) {
  try {
    const query = { 'code': code };
    let producto = await this.findOne(query);
    producto.qty += newProducto.qty
    producto = await producto.save();
    products.entry.push(ingress);
    let response = {
      status: true,
      values: producto
    }
    return response;
  } catch (error) { throw error; }
}

module.exports.egressProducto = async function (code, qty, egress) {
  try {
    const query = { 'code': code };
    let producto = await this.findOne(query);
      producto.qty -= newProducto.qty
      products.egress.push(egress);
      producto = await producto.save();
    let response = {
      status: true,
      values: producto
    }
    return response;
  } catch (error) { throw error; }
}

module.exports.getProductos = async function () {
  try {
    const query = {};
    let productos = await this.find(query)
    let response = {
      status: true,
      values: productos
    }
    return response;
  } catch (error) { throw error; }
}
module.exports.getProducto = async function (id) {
  try {
    const query = { '_id': id };
    let producto = await this.findOne(query)
  .populate({ path: 'userId', select: 'username mail type name' })
  let response = {
      status: true,
      values: producto
    }
    return response;
  } catch (error) { throw error; }
}
module.exports.updateProducto = async function (data) {
    try {
        const query = { '_id': data.id }
        let producto = await this.findOne(query);
        producto.name = data.name;
        producto.code = data.code;
        producto = await producto.save();
        let response = {
            status: true,
            values: producto
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