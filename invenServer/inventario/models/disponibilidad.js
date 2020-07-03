const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const disponibilidadSchema = mongoose.Schema({
  producto: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto',
  }],
  almacen: [{
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
  }],
  qtyDisponible: {
    type: Number,
  },
  qtyBloqueada: {
    type: Number,
  }
})
.post('remove', removeLinkedDocuments)
.post('save', elementAdded);

function elementAdded(element) {
    let almacen = Event.findOne({_id: { $in: element.almacen }})
    let producto = Event.findOne({_id: { $in: element.producto }})
    almacen.disponibilidad.push(element._id)
    almacen = almacen.save();
    producto.disponibilidad.push(element._id)
    producto = producto.save();

}

function removeLinkedDocuments(element) {
    // doc will be the removed Person document
    let almacen = Event.findOne({_id: { $in: element.almacen }})
    let producto = Event.findOne({_id: { $in: element.producto }})
    let disponibilidad = ellement._id
    let disponibilidades = almacen.disponibilidades;
    let pLength = disponibilidads.length;
    for( var i = 0; i < pLength; i++){ 
      if ( disponibilidads[i] === disponibilidad) { 
        disponibilidads.splice(i, disponibilidad); 
      }
    }
    almacen.save();

    disponibilidades = producto.disponibilidades;
    pLength = disponibilidads.length;
    for( var i = 0; i < pLength; i++){ 
      if ( disponibilidads[i] === disponibilidad) { 
        disponibilidads.splice(i, disponibilidad); 
      }
    }
    producto.save();

}

const Disponibilidad = module.exports = mongoose.model("Disponibilidad", disponibilidadSchema);


module.exports.deleteDisponibilidad = async function (id) {
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

module.exports.addDisponibilidad = async function (newDisponibilidad) {
  try {
    let disponibilidad = await newDisponibilidad.save()
/*     .populate({ path: 'almacen', select: 'disponibilidades' });
    .populate({ path: 'producto', select: 'disponibilidades' }); */

/*     let almacen = disponibilidad.almacen;
    almacen.disponibilidad.push(disponibilidad._id)
    almacen = almacen.save();
    producto.disponibilidad.push(disponibilidad._id)
    producto = producto.save();
 *///    disponibilidad = disponibilidad.save();
    console.log(disponibilidad)
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

module.exports.getDisponibilidades = async function () {
  try {
    const query = {};
    let disponibilidades = await this.find(query)
    let response = {
      status: true,
      values: disponibilidades
    }
    return response;
  } catch (error) { throw error; }
}
module.exports.getDisponibilidad = async function (id) {
  try {
    const query = { '_id': id };
    let disponibilidad = await this.findOne(query)
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
module.exports.updateDisponibilidad = async function (data) {
    try {
        const query = { '_id': data.id }
        let disponibilidad = await this.findOne(query);
        disponibilidad.name = data.name;
        disponibilidad.code = data.code;
        disponibilidad = await disponibilidad.save();
        let response = {
            status: true,
            values: disponibilidad
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