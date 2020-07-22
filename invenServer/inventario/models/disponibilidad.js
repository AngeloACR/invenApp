const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const disponibilidadSchema = new mongoose.Schema({
  producto: {
    type: Schema.Types.ObjectId,
    ref: 'Producto',
  },
  dispoAlmacen: [{
    almacen: {
      type: Schema.Types.ObjectId,
      ref: 'Almacen',
    },
    qty: {
      type: Number,
    }
  }],

/*   almacen: [{
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
  }],
 */  ingresos: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingreso',
  }],
  pedidos: [{
    type: Schema.Types.ObjectId,
    ref: 'Pedido',
  }],
  qtyDisponible: {
    type: Number,
  },
  qtyBloqueada: {
    type: Number,
  }
})
//.post('save', elementAdded)

async function elementAdded(element) {
    try {
    
    const Almacen = require('./almacen');
    const Producto = require('./producto')
    let producto = await Producto.findOne({'_id': element.producto })
    let almacen = await Almacen.findOne({'_id': element.almacen })

    let dispoId = element._id
    if(almacen){
      let dispoAlmacen = almacen.disponibilidades; 
      if(dispoAlmacen.indexOf(dispoId) <= -1){
        dispoAlmacen.push(element._id)
        almacen = await almacen.save();
      }
    }
    
    if(producto){
      producto.disponibilidad = element._id
        producto = await producto.save();
      }
} catch (error) {
  console.log(error.toString())
}

}

const Disponibilidad = module.exports = mongoose.model("Disponibilidad", disponibilidadSchema);

module.exports.removeLinkedDocuments = async function (element) {
    try {
    // doc will be the removed Person document

    const Almacen = require('./almacen');
    let dispoAlmacen = element.dispoAlmacen
    dispoAlmacen.forEach(async (item) => {
      let almacen = await Almacen.findOne({'_id': item.almacen })
      let disponibilidad = element._id
      let disponibilidades = almacen.disponibilidades;
      let pLength = disponibilidades.length;
      for( var i = 0; i < pLength; i++){ 
        if ( disponibilidades[i] == disponibilidad) { 
          disponibilidades.splice(i, disponibilidad); 
        }
      }
      await almacen.save();
    });

} catch (error) {

}

}



module.exports.deleteDisponibilidad = async function (id) {
    try {
        const query = { "_id": id };
        let disponibilidad =  await this.findOne(query);
        await this.removeLinkedDocuments(disponibilidad);
        let deleteRes = disponibilidad.remove();
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
    await elementAdded(disponibilidad);
/*     .populate({ path: 'almacen', select: 'disponibilidades' });
    .populate({ path: 'producto', select: 'disponibilidades' }); */

/*     let almacen = disponibilidad.almacen;
    almacen.disponibilidad.push(disponibilidad._id)
    almacen = almacen.save();
    producto.disponibilidad.push(disponibilidad._id)
    producto = producto.save();
 *///    disponibilidad = disponibilidad.save();
    let response = {
      status: true,
      values: disponibilidad
    }
    return response;
  } catch (error) { 
  console.log(error.toString())
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