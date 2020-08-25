const express = require('express');
const gastoRouter = express.Router();
const auth = require("../../users/auth/auth");
const Gasto = require('../models/gasto');
const gastoHandler = require('../controllers/main').gastoHandler;
const comprasHandler = require('../controllers/main').mainHandler;

gastoRouter.post('/', auth, async (req, res) => {
    try {
        const gasto = {
            almacen: req.body.almacen,
            descripcion: req.body.descripcion,
            estadoPago: req.body.estadoPago,
            referencia: req.body.referencia,
            observaciones: req.body.observaciones,
            montoTotal: req.body.montoTotal,
        };
        response = await gastoHandler.addGasto(gasto);
        let ctaPorPagar = response.values.ctaPorPagar

        let pagos = req.body.pagos;
        if (pagos && pagos.length) {
            for (let i = 0; i < pagos.length; i++) {
                let pago = {
                    banco: pagos[i].banco,
                    fecha: pagos[i].fecha,
                    monto: pagos[i].monto,
                    ctaPorPagar: ctaPorPagar
                }
                await comprasHandler.createPago(pago);
            }
        }
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


gastoRouter.get('/all', auth, async (req, res) => {
    try {
        let response = await gastoHandler.getGastos();
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


gastoRouter.get('/:gastoId', auth, async (req, res) => {
    try {
        const gastoId = req.params.gastoId;
        let response = await gastoHandler.getGasto(gastoId);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Delete user
gastoRouter.delete('/', auth, async (req, res, next) => {
    try {

        const item = req.query.item;

        let response = await gastoHandler.deleteGasto(item);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Update user, NEED TO IMPROVE
gastoRouter.put('/', auth, async (req, res, next) => {
    try {
        const updateData = req.body;
        const id = req.body._id;

        let response = await gastoHandler.updateGasto(id, updateData);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }


});

module.exports = gastoRouter;

