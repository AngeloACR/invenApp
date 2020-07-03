const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const almacenSchema = mongoose.Schema({

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
})
.post('remove', removeLinkedDocuments);

function removeLinkedDocuments(element) {
    // doc will be the removed Person document
    let disponibilidades = element.disponibilidades
    disponibilidades.forEach(disponibilidadId => {
      let disponibilidad = Event.findOne({_id: { $in: disponibilidadId }})    
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