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
  moves: [{
    type: Schema.Types.ObjectId,
    ref: 'Movimiento',
  }],
  brand: {
    type: String,
  },
  qtyTotal: {
    type: Number,
  },
  salesPrice: {
    type: Number,
  }, 
  disponibilidades: [{
    type: Schema.Types.ObjectId,
    ref: 'Disponibilidad',
  }]
})
.post('remove', removeLinkedDocuments);

function removeLinkedDocuments(element) {
    // doc will be the removed Person document
    let almacen = Event.findOne({_id: { $in: element.almacen }})
    let producto = ellement._id
    let disponibilidad = almacen.productos;
    let pLength = productos.length;
    for( var i = 0; i < pLength; i++){ 
      if ( productos[i] === producto) { 
        productos.splice(i, producto); 
      }
    }
}

const Producto = module.exports = mongoose.model("Producto", productoSchema);


module.exports.deleteProducto = async function (id) {
    try {
        const query = { "_id": id };
        let deleteRes =  await this.findOneAndRemove(query);
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

module.exports.addProducto = async function (newProducto) {
  try {

    const query = {'code': newProducto.code};
    let producto = await this.findOne(query)
    if(producto){
      throw new Error('Código de producto ya registrado');
    }
    
    producto = await newProducto.save()

    let response = {
      status: true,
      values: producto
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
  let response = {
      status: true,
      values: producto
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
module.exports.updateProducto = async function (data) {
    try {
        const query = { '_id': data.id }
        let producto = await this.findOne(query);
        producto.name = data.name;
        producto.code = data.code;
        producto.brand = data.brand;
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