const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const locacionSchema = mongoose.Schema({

  code: {
    type: String,
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto',
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
});

const Locacion = module.exports = mongoose.model("Locacion", locacionSchema);


module.exports.deleteLocacion = async function (id) {
    try {
        const query = { "_id": id };
        return await this.findOneAndRemove(query);
    } catch (error) {
        throw error;
    }
}

module.exports.addLocacion = async function (newLocacion) {
  try {
    let locacion = await newLocacion.save();
    let response = {
      status: true,
      values: locacion
    }
    return response;
  } catch (error) { throw error; }
}

module.exports.getLocaciones = async function () {
  try {
    const query = {};
    let locacions = await this.find(query)
    let response = {
      status: true,
      values: locacions
    }
    return response;
  } catch (error) { throw error; }
}
module.exports.getLocacion = async function (id) {
  try {
    const query = { '_id': id };
    let locacion = await this.findOne(query)
  .populate({ path: 'userId', select: 'username mail type name' })
  let response = {
      status: true,
      values: locacion
    }
    return response;
  } catch (error) { throw error; }
}
module.exports.updateLocacion = async function (data) {
    try {
        const query = { 'userId': data.id }
        let locacion = await this.findOne(query);
        locacion.code = data.code;
        locacion.state = data.state;
        locacion.city = data.city;
        locacion.address = data.adress;
        locacion = await locacion.save();
        let response = {
            status: true,
            values: locacion
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