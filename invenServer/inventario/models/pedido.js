const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const pedidoSchema = new mongoose.Schema({
  cliente: [{
    type: Schema.Types.ObjectId,
    ref: 'Cliente',
  }],
  vendedor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  productosPedidos: [{
    producto: {
    type: Schema.Types.ObjectId,
    ref: 'Producto',
    },
    qty: {
      type: Number,
    },
    montoProducto: {
      type: Number,
    }
  }],
  fecha: {
    type: Date,
  },
    montoTotal: {
      type: Number,
    },
  estado: {
    type: String,
  },
  condicionVenta: {
    type: String,
  },
  observaciones: {
    type: String,
  },
}).post('save', alterDisponibilidad)
.post('remove', egresoDeleted);

async function egresoDeleted(element, next){
  try{
      console.log('here')
      const Producto = require('./producto');
      const Disponibilidad = require('./disponibilidad');
          let pedidoId = element._id;
      console.log('here2')

      let productosPedidos = element.productosPedidos;
      let piLength = productosPedidos.length;
      console.log('here3')

      for (let i = 0; i < piLength; i++) {
        let productoId = productosPedidos[i].producto;
          let qty = productosPedidos[i].qty;

        let queryA = {'producto': productoId}
        let disponibilidad = await Disponibilidad.findOne(queryA)
        


          disponibilidad.qtyDisponible +=  qty;
          disponibilidad.qtyBloqueada -=  qty;
          for( let j = 0; j < disponibilidad.pedidos.length; j++){ 
            if ( disponibilidad.pedidos[j].toString() == pedidoId) { 
              disponibilidad.pedidos.splice(j, 1);
            }
          }
          disponibilidad = await disponibilidad.save();
      }
      next();
} catch (error) {
console.log(error.toString());
}

}

async function alterDisponibilidad(element, next){
  try{
  
      const Producto = require('./producto');
      const Disponibilidad = require('./disponibilidad');

      let productosPedidos = element.productosPedidos;
          let pedidoId = element._id;

      let piLength = productosPedidos.length;

      for (let i = 0; i < piLength; i++) {
        let productoId = productosPedidos[i].producto;
          let qty = productosPedidos[i].qty;

        let queryA = {'producto': productoId}
        let disponibilidad = await Disponibilidad.findOne(queryA)
        


          disponibilidad.qtyDisponible -=  qty;
          disponibilidad.qtyBloqueada +=  qty;
          disponibilidad.pedidos.push(pedidoId);
          disponibilidad = await disponibilidad.save();
      }
      next();
  } catch (error) {

  }

}

const Pedido = module.exports = mongoose.model("Pedido", pedidoSchema);


module.exports.deletePedido = async function (id) {
    try {
        const query = { "_id": id };
        let deleteRes =  await this.findOneAndRemove(query);
        deleteRes = deleteRes.remove();
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
    .populate('productosPedidos.producto')
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