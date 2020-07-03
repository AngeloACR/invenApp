const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const pedidoSchema = mongoose.Schema({
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
      

      let moves = disponibilidad.pedidos;
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

const Pedido = module.exports = mongoose.model("Pedido", pedidoSchema);


module.exports.deletePedido = async function (id) {
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

module.exports.addPedido = async function (newPedido) {
  try {
    let pedido = await newPedido.save()
/*     .populate({ path: 'almacen', select: 'pedidos' });
    .populate({ path: 'producto', select: 'pedidos' }); */

/*     let almacen = pedido.almacen;
    almacen.pedido.push(pedido._id)
    almacen = almacen.save();
    producto.pedido.push(pedido._id)
    producto = producto.save();
 *///    pedido = pedido.save();
    console.log(pedido)
    let response = {
      status: true,
      values: pedido
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

module.exports.getPedidos = async function () {
  try {
    const query = {};
    let pedidos = await this.find(query)
    let response = {
      status: true,
      values: pedidos
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
module.exports.getPedido = async function (id) {
  try {
    const query = { '_id': id };
    let pedido = await this.findOne(query)
  let response = {
      status: true,
      values: pedido
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
module.exports.updatePedido = async function (data) {
    try {
        const query = { '_id': data.id }
        let pedido = await this.findOne(query);
        pedido.name = data.name;
        pedido.code = data.code;
        pedido = await pedido.save();
        let response = {
            status: true,
            values: pedido
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