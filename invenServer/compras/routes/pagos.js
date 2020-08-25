const express = require('express');
const pagoRouter = express.Router();
const auth = require("../../users/auth/auth");
const pagoHandler = require('../controllers/main').pagoHandler;

pagoRouter.post('/', auth, async (req, res) => {
    try {
        const pago = {
            ctaPorPagar: req.body.ctaPorPagar,
            banco: req.body.banco,
            monto: req.body.monto,
            fecha: req.body.fecha,
        };
        console.log('here')
        let response = await pagoHandler.addPago(pago);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


pagoRouter.get('/all', auth, async (req, res) => {
    try {
        let response = await pagoHandler.getPagos();

        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


pagoRouter.get('/:pagoId', auth, async (req, res) => {
    try {
        const pagoId = req.params.pagoId;
        let response = await pagoHandler.getPago(pagoId);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Delete user
pagoRouter.delete('/', auth, async (req, res, next) => {
    try {

        const item = req.query.item;

        let response = await pagoHandler.deletePago(item);
        console.log(response);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Update user, NEED TO IMPROVE
pagoRouter.put('/', auth, async (req, res, next) => {
    try {
        const updateData = req.body;
        const id = req.body.id
        let response = await pagoHandler.updatePago(id, updateData);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }


});


module.exports = pagoRouter;
