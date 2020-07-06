const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const almacenSchema = new mongoose.Schema({

  code: {
    type: String,
  },
  disponibilidades: [{
    type: Schema.Types.ObjectId,
    ref: 'Disponibilidad',
  }],
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
}).post('save', createDisponibilidad)
.post('remove', removeLinkedDocuments);


async function createDisponibilidad(element, next) {
  try{
    const Disponibilidad = require('./disponibilidad');
    const Producto = require('./producto');

      let almacenId = element._id;
      let productos = await Producto.find({});
      let pLength = productos.length;
      
      for(let i = 0; i < pLength; i++){
        let productoId = productos[i]._id;
        let query = {
          'producto': productoId
        }
        let isInDispo = false
        let dispoAux = await Disponibilidad.findOne(query);
        let dLength = dispoAux.dispoAlmacen.length;
        for (let j = 0; j < dLength; j++) {
          let almacen = dispoAux.dispoAlmacen[j].almacen;
          if(almacen == almacenId){
            isInDispo = true;
            break;
          }
        }
        if(!isInDispo){
          let aux = {
            almacen: almacenId,
            qty: 0,
          } 
          dispoAux.dispoAlmacen.push(aux);
          await dispoAux.save();
        }

      } 
     next();
} catch (error) {
console.log(error.toString())
}

}

async function removeLinkedDocuments(element, next) {
  try{
    // doc will be the removed Person document
    let disponibilidades = element.disponibilidades
    disponibilidades.forEach(async (disponibilidadId) => {
      let disponibilidad = await Disponibilidad.findOne({'_id': disponibilidadId })    
      .populate('producto');
      let producto = disponibilidad.producto;
      let dispoProducto = producto.disponibilidades;
      let dLength = dispoProducto.length;
      for( var i = 0; i < dLength; i++){ 
        if ( dispoProducto[i] === disponibilidadId) { 
          dispoProducto.splice(i, disponibilidadId); 
        }
      }

    });
    next()
} catch (error) {

}

}

const Almacen = module.exports = mongoose.model("Almacen", almacenSchema);


module.exports.deleteAlmacen = async function (id) {
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

module.exports.addAlmacen = async function (newAlmacen) {
  try {
    const query = {'code': newAlmacen.code};
    let almacen = await this.findOne(query)
    if(almacen){
      throw new Error('Código de almacen ya registrado');
    }
    
    almacen = await newAlmacen.save();
    let response = {
      status: true,
      values: almacen
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

module.exports.getAlmacenes = async function () {
  try {
    const query = {};
    let almacens = await this.find(query)
    let response = {
      status: true,
      values: almacens
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
module.exports.getAlmacen = async function (id) {
  try {
    const query = { '_id': id };
    let almacen = await this.findOne(query)
  .populate({ path: 'userId', select: 'username mail type name' })
  let response = {
      status: true,
      values: almacen
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
module.exports.updateAlmacen = async function (data) {
    try {
        const query = { 'userId': data.id }
        let almacen = await this.findOne(query);
        almacen.code = data.code;
        almacen.state = data.state;
        almacen.city = data.city;
        almacen.address = data.adress;
        almacen = await almacen.save();
        let response = {
            status: true,
            values: almacen
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