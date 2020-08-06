const mongoose = require('mongoose');
const config = require('../../config/database');
const Schema = require('mongoose').Schema;

const movimientoDiarioSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    balance: {
        type: Number,
    },
    clasificacion: {
        type: String,
    },
    tipo: {
        type: String,
    },
    naturaleza: {
        type: String,
    },
    movimientos: [{
        type: String
    }]
})
const MovimientoDiario = module.exports = mongoose.model("MovimientoDiario", movimientoDiarioSchema);

module.exports.removeRef = async function (element) {
    try {
    } catch (error) {
        throw error
    }

}


module.exports.deleteMovimientoDiario = async function (id) {
    try {
        const query = { "_id": id };
        let movimientoDiario = await this.findOne(query);
        await this.removeRef(movimientoDiario);
        let deleteRes = await movimientoDiario.remove();
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

module.exports.addMovimientoDiario = async function (newMovimientoDiario) {
    try {
        let movimientoDiario = await newMovimientoDiario.save()

        let response = {
            status: true,
            values: movimientoDiario
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

module.exports.getMovimientosDiarios = async function () {
    try {
        const query = {};
        let movimientoDiarios = await this.find(query)
        let response = {
            status: true,
            values: movimientoDiarios
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
module.exports.getMovimientoDiario = async function (id) {
    try {
        const query = { '_id': id };
        let movimientoDiario = await this.findOne(query)
        let response = {
            status: true,
            values: movimientoDiario
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
module.exports.updateMovimientoDiario = async function (data) {
    try {
        const query = { '_id': data.id }
        let movimientoDiario = await this.findOne(query);
        movimientoDiario.name = data.name;
        movimientoDiario.code = data.code;
        movimientoDiario = await movimientoDiario.save();
        let response = {
            status: true,
            values: movimientoDiario
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