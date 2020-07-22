const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const productoSchema = new mongoose.Schema({
  disponibilidad: {
    type: Schema.Types.ObjectId,
    ref: 'Disponibilidad',
  },
  precio: {
    type: Schema.Types.ObjectId,
    ref: 'Precio',
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  code: {
    type: String,
  },
  brand: {
    type: String,
  }
})
//.post('save', createRef)

const Producto = module.exports = mongoose.model("Producto", productoSchema);

module.exports.createRef = async function (element) {
try{

    const Disponibilidad = require('./disponibilidad');
    const Precio = require('./precio');
    const Almacen = require('./almacen');
      let productoId = element._id;
      let query = {'producto': productoId}
      let dispoAux = await Disponibilidad.findOne(query);
      let precioAux = await Precio.findOne(query)
      if(!dispoAux){

        let dispoAlmacen = [];
        let almacenes = await Almacen.find({});
        let aLength = almacenes.length;
        for(let i = 0; i < aLength; i++){
          let almacenId = almacenes[i]._id;
          let aux = {
            almacen: almacenId,
            qty: 0,
          }
          dispoAlmacen.push(aux);
        }
            const disponibilidad = {
              producto: productoId,
              dispoAlmacen: dispoAlmacen,
              qtyDisponible: 0,
              qtyBloqueada: 0,
            }
            let newDisponibilidad = new Disponibilidad(disponibilidad);
            newDisponibilidad =  await Disponibilidad.addDisponibilidad(newDisponibilidad);
            
          }

      if(!precioAux){

            const precio = {
              producto: productoId,
              valor: 0
              }
            let newPrecio = new Precio(precio);
            newPrecio =  await Precio.addPrecio(newPrecio);
            
          }
 } catch (error) {
   console.log(error.toString())
}

}


module.exports.removeLinkedDocuments = async function (element) {
  try{
    
      const Disponibilidad = require('./disponibilidad');
      const Precio = require('./precio');

    let disponibilidadId = element.disponibilidad
    let precioId = element.precio

    let deleteRes = await Disponibilidad.deleteDisponibilidad(disponibilidadId)
    console.log(deleteRes)
    deleteRes = await Precio.deletePrecio(precioId)
    console.log(deleteRes)

  } catch (error) {
   console.log(error.toString())
  }

}



module.exports.deleteProducto = async function (id) {
    try {
        const query = { "_id": id };
        let producto =  await this.findOne(query);
        console.log('here')
        await this.removeLinkedDocuments(producto)
        console.log('here2')
        let deleteRes = await producto.remove();

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
    await this.createRef(producto);

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
    .populate('disponibilidad')
    .populate('precio')
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