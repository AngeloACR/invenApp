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
    let disponibilidades = element.disponibilidades
    disponibilidades.forEach(disponibilidadId => {
      let disponibilidad = Event.findOne({_id: { $in: disponibilidadId }})    
      .populate('almacen');
      let almacen = disponibilidad.almacen;
      let dispoAlmacen = almacen.disponibilidades;
      let dLength = dispoAlmacen.length;
      for( var i = 0; i < dLength; i++){ 
        if ( dispoAlmacen[i] === disponibilidadId) { 
          dispoAlmacen.splice(i, disponibilidadId); 
        }
      }

    });

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