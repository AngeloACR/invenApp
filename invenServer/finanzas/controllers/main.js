const Banco = require('../models/banco');
const DisponibilidadBancaria = require('../models/disponibilidadbancaria');
const spawn = require("child_process").spawn;

const mainHandler = {
    createDisponibilidadBancaria: async function (element) {
        try {
            let dispo = {
                banco: element._id,
                montoDisponible: element.saldoInicial,
                montoBloqueado: 0,
                mondoDiferido: 0,
            }

            let response = await disponibilidadHandler.addDisponibilidadBancaria(dispo);

            return response.values._id;

        } catch (error) {
            console.log(error.toString())
        }

    },

    createMovimientoDiario: async function (element) {
        try {
            const movimientoDiario = {
                banco: element.banco,
                monto: element.monto,
                descripcion: element.descripcion,
                signo: element.signo,
                fecha: element.fecha
            };
            let response = await movimientoDiarioHandler.addMovimientoDiario(movimientoDiario);
            return response.values;

        } catch (error) {
            console.log(error.toString())
        }

    },

    removeBancoRef: async function (element) {
        try {
            let bancoId = element._id;
            let response = disponibilidadHandler.getDisponibilidadBancariaByBanco(bancoId);
            let dispo = response.values;

            let deleteRes = await disponibilidadHandler.deleteDisponibilidadBancaria(dispo._id);

        } catch (error) {
            console.log(error.toString())
        }

    },

    aumentarDisponibilidad: async function (movimiento) {
        try {
            const bId = movimiento.banco;

            let query = { 'banco': bId }
            let response = disponibilidadHandler.getDisponibilidadBancariaByBanco(bId)
            let dispo = response.values;
            let montoActual = dispo.montoDisponible;
            let montoMovimiento = movimiento.monto;

            const pytonPath = "./python/aumentardisponibilidad.py";

            const options = [pythonPath, montoActual, montoMovimiento];

            const process = spawn('python', options);

            var aumentarData;

            process.stdout.on('data', async (data) => {
                console.log(data)
                aumentarData = data;
                //                aumentarData = data.toString();

            });

            process.on('close', async (code) => {
                dispo.montoDisponible = aumentarData.disponibilidadDespues;
                dispo.movimientos.push(movimiento._id)
                await dispo.save();
                return {
                    success: true,
                    msg: aumentarData
                };
            });
        } catch (error) {
            console.log(error.toString())
        }

    },

    disminuirDisponibilidad: async function (movimiento) {
        try {
            const bId = movimiento.banco;

            let query = { 'banco': bId }
            let response = disponibilidadHandler.getDisponibilidadBancariaByBanco(bId)
            let dispo = response.values;
            let montoActual = dispo.montoDisponible;
            let montoMovimiento = movimiento.monto;

            const pytonPath = "./python/disminuirdisponibilidad.py";

            const options = [pythonPath, montoActual, montoMovimiento];

            const process = spawn('python', options);

            var disminuirData;

            process.stdout.on('data', async (data) => {
                disminuirData = data.toString();
            });

            process.on('close', async (code) => {
                dispo.montoDisponible = disminuirData.disponibilidadDespues;
                dispo.movimientos.push(movimiento._id)
                await dispo.save();
                return {
                    success: true,
                    msg: disminuirData
                };
            });
        } catch (error) {
            console.log(error.toString())
        }

    },

    addMovimientoToDisponibilidadBancaria: async function (movimiento) {
        try {
        } catch (error) {
            console.log(error.toString())
        }

    },

    removeMovimientoFromDisponibilidadBancaria: async function (movimientoId) {
        try {
        } catch (error) {
            console.log(error.toString())
        }

    },

}

const bancoHandler = {

    deleteBanco: async function (id) {
        try {
            const query = { "_id": id };
            let response = await this.getBancoById(query);
            let banco = response.values;
            await mainHandler.removeBancoRef(banco)
            let deleteRes = await banco.remove();

            response = {
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
    },

    addBanco: async function (banco) {
        try {

            let newBanco = new Banco(banco);
            const query = { 'code': newBanco.code };
            let aux = await this.findOne(query)
            if (aux) {
                throw new Error('Código de banco ya registrado');
            }
            let dispo = await mainHandler.createDisponibilidadBancaria(newBanco);

            newBanco.disponibilidad = dispo;
            banco = await newBanco.save();

            let response = {
                status: true,
                values: banco
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getBancos: async function () {
        try {
            const query = {};
            let bancos = await Banco.find(query)
            let response = {
                status: true,
                values: bancos
            }
            return response;
        } catch (error) { throw error; }
    },
    getBancoById: async function (id) {
        try {
            const query = { '_id': id };
            let banco = await Banco.findOne(query)
            let response = {
                status: true,
                values: banco
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    updateBanco: async function (data) {
        try {
            const query = { "_id": id };
            let response = await this.getBancoById(query);
            banco.name = data.name;
            banco.code = data.code;
            banco.brand = data.brand;
            banco = await banco.save();
            let response = {
                status: true,
                values: banco
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
}
const disponibilidadHandler = {

    deleteDisponibilidadBancaria: async function (id) {
        try {
            const query = { "_id": id };
            let response = await this.getDisponibilidadBancariaById(query);
            let disponibilidadBancaria = response.values;
            let deleteRes = await disponibilidadBancaria.remove();

            response = {
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
    },

    addDisponibilidadBancaria: async function (dispo) {
        try {

            let newDisponibilidadBancaria = new DisponibilidadBancaria(dispo)

            newDisponibilidadBancaria = await newDisponibilidadBancaria.save();

            let response = {
                status: true,
                values: disponibilidadBancaria
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },

    getDisponibilidadesBancarias: async function () {
        try {
            const query = {};
            let disponibilidadBancarias = await DisponibilidadBancaria.find(query)
            let response = {
                status: true,
                values: disponibilidadBancarias
            }
            return response;
        } catch (error) { throw error; }
    },
    getDisponibilidadBancariaById: async function (id) {
        try {
            const query = { '_id': id };
            let disponibilidadBancaria = await DisponibilidadBancaria.findOne(query)
            let response = {
                status: true,
                values: disponibilidadBancaria
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    getDisponibilidadBancariaByBanco: async function (id) {
        try {
            const query = { 'banco': id };
            let disponibilidadBancaria = await DisponibilidadBancaria.findOne(query)
            let response = {
                status: true,
                values: disponibilidadBancaria
            }
            return response;
        } catch (error) {
            let response = {
                status: false,
                msg: error.toString().replace("Error: ", "")
            }
            return response
        }
    },
    updateDisponibilidadBancaria: async function (id, data) {
        try {
            const query = { "_id": id };
            let response = await this.getDisponibilidadBancariaById(query);
            disponibilidadBancaria.name = data.name;
            disponibilidadBancaria.code = data.code;
            disponibilidadBancaria.brand = data.brand;
            disponibilidadBancaria = await disponibilidadBancaria.save();
            let response = {
                status: true,
                values: disponibilidadBancaria
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
}

const movimientoDiarioHandler = {


    deleteMovimientoDiario: async function (id) {
        try {
            const query = { "_id": id };
            let response = await this.getMovimientoDiarioById(query);
            let movimientoDiario = response.values;

            let sign = newMovimientoDiario.signo
            if (sign == '+') {
                mainHandler.disminuirCuentaT(move)
                mainHandler.disminuirDisponibilidad(move)
            } else {
                mainHandler.aumentarCuentaT(move)
                mainHandler.aumentarDisponibilidad(move)
            }

            let deleteRes = await movimientoDiario.remove();
            response = {
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
    },

    addMovimientoDiario: async function (move) {
        try {
            let newMovimientoDiario = new MovimientoDiario(move)
            let sign = newMovimientoDiario.signo
            let data;
            if (sign == '+') {
                data = await mainHandler.aumentarDisponibilidad(move)
            } else {
                data = await mainHandler.disminuirDisponibilidad(move)
            }
            newMovimientoDiario.disponibilidadAntes = data.disponibilidadAntes;
            newMovimientoDiario.disponibilidadDespues = data.disponibilidadDespues;
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
    },

    getMovimientosDiarios: async function () {
        try {
            const query = {};
            let movimientoDiarios = await MovimientoDiario.find(query)
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
    },
    getMovimientosDiariosByBanco: async function (banco) {
        try {
            const query = { 'banco': banco };
            let movimientoDiarios = await MovimientoDiario.find(query)
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
    },
    getMovimientosDiariosByCuentaT: async function (cuentat) {
        try {
            const query = { 'cuentaT': cuentat };
            let movimientoDiarios = await MovimientoDiario.find(query)
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
    },
    getMovimientoDiarioById: async function (id) {
        try {
            const query = { '_id': id };
            let movimientoDiario = await MovimientoDiario.findOne(query)
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
    },
    getMovimientoDiarioByReferencia: async function (ref) {
        try {
            const query = { 'referencia': ref };
            let movimientoDiario = await MovimientoDiario.findOne(query)
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
    },
    updateMovimientoDiario: async function (id, data) {
        try {
            const query = { "_id": id };
            let response = await this.getMovimientoDiarioById(query);
            let movimientoDiario = response.values;

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
}

const finanzasCtrl = {
    mainHandler,
    bancoHandler,
    disponibilidadHandler,
    movimientoDiarioHandler
}

module.exports = finanzasCtrl
