const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;
const Producto = require('./producto');
const Almacen = require('./almacen');

const ingresoSchema = mongoose.Schema({
  productosIngresados: [{
    producto: {
    type: Schema.Types.ObjectId,
    ref: 'Producto',
    },  
    qty: {
      type: Number,
    },
    unitcost: {
      type: Number,
    }
  }],
  almacen: {
    type: Schema.Types.ObjectId,
    ref: 'Almacen',
  },
  fecha: {
    type: Date,
  },
  estado: {
    type: String,
  },
  observaciones: {
    type: String,
  },
  referencia: {
    type: String,
  }
}).post('save', alterDisponibilidad)
.post('remove', ingresoDeleted);

async function ingresoDeleted(element){
  try{
      let productosIngresados = element.productosIngresados;
      let almacenId = element.almacen;

      console.log(productosIngresados)
      let almacen = await Almacen.findOne({_id: { $in: almacenId }})
      .populate('disponibilidades');
      console.log('2')

      let dispoAlmacen = almacen.disponibilidades;      
      console.log('3')
      productosIngresados.forEach(async (productoPedido) => {
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
          let ingresoQty = element.qty;
          
            qtyDisponible -=  qty;
            qtyTotal -=  qty;        
            
            let ingresos = disponibilidad.ingresos;
            let ingresoId = element._id
            let pLength = ingreso.length;
            for( var i = 0; i < pLength; i++){ 
              if ( ingresos[i] === ingresoId) { 
                ingresos.splice(i, ingresoId); 
              }
            }

            disponibilidad = await disponibilidad.save()
      });
      
      

} catch (error) {

}

}

async function alterDisponibilidad(element){
  try{
  
      let productosIngresados = element.productosIngresados;
      let almacenId = element.almacen;

      console.log(element)

      let almacen = await Almacen.findOne({"_id": almacenId })
      .populate('disponibilidades');

      let dispoAlmacen = almacen.disponibilidades;      
      productosIngresados.forEach( async (productoPedido) => {
        let productoId = productoPedido.producto;
        let producto = await Producto.findOne({"_id": productoId })
        .populate('disponibilidades');
        console.log(producto)
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
            console.log('here')
              if (dispoProducto[i].almacen == almacenId) {
                  disponibilidad = dispoProducto[i];
                  break;
              }
            }


          let qtyTotal = producto.qtyTotal;
          let qtyDisponible = disponibilidad.qtyDisponible;
          let ingresoQty = element.qty;
          
            qtyDisponible +=  qty;
            qtyTotal +=  qty;        
      });
      

      disponibilidad = await disponibilidad.save()
} catch (error) {

}

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