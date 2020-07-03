const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const ingresoSchema = mongoose.Schema({
  producto: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto',
  }],
  almacen: [{
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
  }],
  qty: {
    type: Number,
  },
  type: {
    type: String,
  },
  unitcost: {
    type: Number,
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
  },
  reference: {
    type: String,
  }
}).pre('save', alterDisponibilidad)
.post('remove', movementDeleted);

function movementDeleted(element){
      let productoId = element.producto;
      let almacenId = element.almacen;

      let producto = Event.findOne({_id: { $in: productoId }})
      .populate('disponibilidades');

      let almacen = Event.findOne({_id: { $in: almacenId }})
      .populate('disponibilidades');

      let dispoAlmacen = almacen.disponibilidades;      
      
      let aLength = dispoAlmacen.length;

      let disponibilidad;
      for (let i=0; i < aLength; i++) {
          if (dispoAlmacen[i].producto === producto.id) {
              disponibilidad = dispoAlmacen[i];
              break;
          }
        }

      let qtyTotal = productos.qtyTotal;
      let qtyDisponible = disponibilidad.qtyDisponible;
      let qtyBloqueada = disponibilidad.qtyBloqueada;
      let movementType = element.type;
      let movementQty = element.qty;
      
      if(movementType == 'Ingreso'){ 
        qtyDisponible -=  qty;
        qtyTotal -=  qty;
      } else if(movementType == 'Egreso'){
        qtyBloqueada -=  qty;
        qtyDisponible +=  qty;
      }
      

      let moves = disponibilidad.ingresos;
      let moveId = ellement._id
      let pLength = moves.length;
      for( var i = 0; i < pLength; i++){ 
        if ( moves[i] === moveId) { 
          moves.splice(i, moveId); 
        }
      }

      disponibilidad = disponibilidad.save()

}

function alterDisponibilidad(element){
      let productoId = element.producto;
      let almacenId = element.almacen;

      let producto = Event.findOne({_id: { $in: productoId }})
      .populate('disponibilidades');

      let almacen = Event.findOne({_id: { $in: almacenId }})
      .populate('disponibilidades');

      let dispoAlmacen = almacen.disponibilidades;      
      
      let aLength = dispoAlmacen.length;

      let disponibilidad;
      for (let i=0; i < aLength; i++) {
          if (dispoAlmacen[i].producto === producto.id) {
              disponibilidad = dispoAlmacen[i];
              break;
          }
        }

      let qtyTotal = productos.qtyTotal;
      let qtyDisponible = disponibilidad.qtyDisponible;
      let qtyBloqueada = disponibilidad.qtyBloqueada;
      let movementType = element.type;
      let movementQty = element.qty;
      
      if(movementType == 'Ingreso'){ 
        qtyDisponible +=  qty;
        qtyTotal +=  qty;
      } else if(movementType == 'Egreso'){
        qtyDisponible -=  qty;
        qtyBloqueada +=  qty;
      }
      

      disponibilidad = disponibilidad.save()

}

const Ingreso = module.exports = mongoose.model("Ingreso", ingresoSchema);


module.exports.deleteIngreso = async function (id) {
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

module.exports.addIngreso = async function (newIngreso) {
  try {
    let ingreso = await newIngreso.save()
/*     .populate({ path: 'almacen', select: 'ingresos' });
    .populate({ path: 'producto', select: 'ingresos' }); */

/*     let almacen = ingreso.almacen;
    almacen.ingreso.push(ingreso._id)
    almacen = almacen.save();
    producto.ingreso.push(ingreso._id)
    producto = producto.save();
 *///    ingreso = ingreso.save();
    console.log(ingreso)
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