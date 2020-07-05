const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;
const Producto = require('./producto');
const Almacen = require('./almacen');

const pedidoSchema = mongoose.Schema({
  cliente: [{
    type: Schema.Types.ObjectId,
    ref: 'Cliente',
  }],
  vendedor: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  productosPedidos: [{
    producto: {
    type: Schema.Types.ObjectId,
    ref: 'Producto',
    },
    qty: {
      type: Number,
    },
    precio: {
      type: Number,
    }
  }],
  date: {
    type: Date,
  },
  estado: {
    type: String,
  },
  observaciones: {
    type: String,
  },
}).post('save', alterDisponibilidad)
.post('remove', egresoDeleted);

async function egresoDeleted(element){
  try{
      let productosPedidos = element.productosPedidos;
      let almacenId = element.almacen;


      let almacen = await Almacen.findOne({_id: { $in: almacenId }})
      .populate('disponibilidades');

      let dispoAlmacen = almacen.disponibilidades;      
      productosPedidos.forEach(async (productoPedido) => {
        let productoId = productoPedido.producto;
        let producto = await Producto.findOne({_id: { $in: productoId }})
        .populate('disponibilidades');
        let dispoProducto = producto.disponibilidades;      
/*           let aLength = dispoAlmacen.length;

          let disponibilidad;
          for (let i=0; i < aLength; i++) {
              if (dispoAlmacen[i].producto === productoId) {
                  disponibilidad = dispoAlmacen[i];
                  break;
              }
            }
 */

          let aLength = dispoProducto.length;

          let disponibilidad;
          for (let i=0; i < aLength; i++) {
              if (dispoProducto[i].producto === productoId) {
                  disponibilidad = dispoProducto[i];
                  break;
              }
            }


          let qtyTotal = producto.qtyTotal;
          let qtyDisponible = disponibilidad.qtyDisponible;
          let pedidoQty = element.qty;
          
          qtyBloqueada -=  qty;
          qtyDisponible +=  qty;     
            
            let pedidos = disponibilidad.pedidos;
            let pedidoId = element._id
            let pLength = pedido.length;
            for( var i = 0; i < pLength; i++){ 
              if ( pedidos[i] === pedidoId) { 
                pedidos.splice(i, pedidoId); 
              }
            }

            disponibilidad = await disponibilidad.save()
      });
} catch (error) {

}

}

async function alterDisponibilidad(element){
  try{
  console.log('alterando pedido')
      let productosPedidos = element.productosPedidos;
      let almacenId = element.almacen;


      let almacen = await Almacen.findOne({_id: { $in: almacenId }})
      .populate('disponibilidades');

      let dispoAlmacen = almacen.disponibilidades;      
      productosPedidos.forEach(async (productoPedido) => {
        let productoId = productoPedido.producto;
        let producto = await Producto.findOne({_id: { $in: productoId }})
        .populate('disponibilidades');
        let dispoProducto = producto.disponibilidades;      
/*           let aLength = dispoAlmacen.length;

          let disponibilidad;
          for (let i=0; i < aLength; i++) {
              if (dispoAlmacen[i].producto === productoId) {
                  disponibilidad = dispoAlmacen[i];
                  break;
              }
            }
 */

          let aLength = dispoProducto.length;

          let disponibilidad;
          for (let i=0; i < aLength; i++) {
              if (dispoProducto[i].producto === productoId) {
                  disponibilidad = dispoProducto[i];
                  break;
              }
            }


          let qtyTotal = producto.qtyTotal;
          let qtyDisponible = disponibilidad.qtyDisponible;
          let pedidoQty = element.qty;
          
        qtyDisponible -=  qty;
        qtyBloqueada +=  qty;
      
            disponibilidad = await disponibilidad.save()
      });
} catch (error) {

}

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