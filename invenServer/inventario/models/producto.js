const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const productoSchema = new mongoose.Schema({
  disponibilidades: [{
    type: Schema.Types.ObjectId,
    ref: 'Disponibilidad',
  }],
  precio: {
    type: Schema.Types.ObjectId,
    ref: 'Precio',
  },
  name: {
    type: String,
  },
  code: {
    type: String,
  },
  brand: {
    type: String,
  }
}).post('save', createRef)
.post('remove', removeLinkedDocuments);

async function createRef(element, next) {
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

  next()
 } catch (error) {
   console.log(error.toString())
}

}

async function removeLinkedDocuments(element, next) {
  try{
    // doc will be the removed Person document
    let disponibilidades = element.disponibilidades

      let dLength = disponibilidades.length;
      console.log(dLength);
      for(let i = 0; i < dLength; i++){
        let disponibilidad = await Disponibilidad.findOne({'_id': disponibilidad[i] }) 
        .populate('almacen');
        let almacen = disponibilidad.almacen;
        let dispoAlmacen = almacen.disponibilidades;
        let aLength = dispoAlmacen.length;
        for( var j = 0; j < aLength; i++){ 
          if ( dispoAlmacen[i] === disponibilidadId) { 
            dispoAlmacen.splice(i, disponibilidadId); 
          }
        }
        await Almacen.save()

      }
    next()

/*     disponibilidades.forEach(async (disponibilidadId) => {
      let disponibilidad = await Disponibilidad.findOne({'_id': disponibilidadId })    
      .populate('almacen');
      let almacen = disponibilidad.almacen;
      let dispoAlmacen = almacen.disponibilidades;
      let dLength = dispoAlmacen.length;
      for( var i = 0; i < dLength; i++){ 
        if ( dispoAlmacen[i] === disponibilidadId) { 
          dispoAlmacen.splice(i, disponibilidadId); 
        }
      }
      await Almacen.save()
    });
 */} catch (error) {

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