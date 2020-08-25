const CuentaT = require('../models/cuentat');
const spawn = require("child_process").spawn;

const mainHandler = {

    aumentarCuentaT: async function (move) {
        try {
            const cId = movimiento.cuentaT;

            let query = { '_id': bId }
            let response = ctaTHandler.getCuentaTById(cId)
            let ctaT = response.values;
            let balance = ctaT.balance;
            let montoMovimiento = movimiento.monto;

            const pytonPath = "./python/aumentarbalance.py";

            const options = [pythonPath, balance, montoMovimiento];

            const process = spawn('python', options);

            var disminuirData;

            process.stdout.on('data', async (data) => {
                disminuirData = data.toString();
            });

            process.on('close', async (code) => {
                dispo.montoDisponible = disminuirData.disponibilidespues;
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

    disminuirCuentaT: async function (move) {
        try {
            const cId = movimiento.cuentaT;

            let query = { '_id': bId }
            let response = ctaTHandler.getCuentaTById(cId)
            let ctaT = response.values;
            let balance = ctaT.balance;
            let montoMovimiento = movimiento.monto;

            const pytonPath = "./python/disminuirbalance.py";

            const options = [pythonPath, balance, montoMovimiento];

            const process = spawn('python', options);

            var disminuirData;

            process.stdout.on('data', async (data) => {
                disminuirData = data.toString();
            });

            process.on('close', async (code) => {
                dispo.montoDisponible = disminuirData.disponibilidespues;
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


    removeCtaTFromMovimientosDiarios: async function (element) {
        try {

        } catch (error) {

            console.log(error.toString())
        }
    },


}

const ctaTHandler = {

    deleteCuentaT: async function (id) {
        try {
            let response = this.getCtaTById(id);
            let cuentaT = response.values;
            await this.removeCtaTFromMovimientosDiarios(cuentaT);
            let deleteRes = await cuentaT.remove();
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

    addCuentaT: async function (element) {
        try {
            let newCuentaT = new CuentaT(element)
            let cuentaT = await newCuentaT.save()

            let response = {
                status: true,
                values: cuentaT
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

    getCuentasT: async function () {
        try {
            let cuentasT = await CuentaT.find()
            let response = {
                status: true,
                values: cuentasT
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
    getCuentaTById: async function (id) {
        try {
            const query = { '_id': id };
            let cuentaT = await CuentaT.findOne(query)
            let response = {
                status: true,
                values: cuentaT
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
    updateCuentaT: async function (id, data) {
        try {
            let response = this.getCtaTById(id);
            let cuentaT = response.values;
            cuentaT.name = data.name;
            cuentaT = await cuentaT.save();
            response = {
                status: true,
                values: cuentaT
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


const contabilidadCtrl = {
    mainHandler,
    ctaTHandler,
}

module.exports = contabilidadCtrl
