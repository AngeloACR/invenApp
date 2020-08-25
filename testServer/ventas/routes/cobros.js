const express = require('express');
const cobroRouter = express.Router();
const auth = require("../../users/auth/auth");
const cobroHandler = require('../controllers/main').cobroHandler;
const ventasHandler = require('../controllers/main').mainHandler;

cobroRouter.post('/', auth, async (req, res) => {
    try {
        console.log(req.body);
        const cobro = {
            ctaPorCobrar: req.body.ctaPorCobrar,

            fecha: req.body.fecha,
            banco: req.body.banco,
            monto: req.body.monto,
        };
        console.log(cobro);
        let response = await cobroHandler.addCobro(cobro);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


cobroRouter.get('/all', auth, async (req, res) => {
    try {
        let response = await cobroHandler.getCobros();

        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


cobroRouter.get('/:cobroId', auth, async (req, res) => {
    try {
        const cobroId = req.params.cobroId;
        let response = await cobroHandler.getCobro(cobroId);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Delete user
cobroRouter.delete('/', auth, async (req, res, next) => {
    try {

        const item = req.query.item;

        let response = await cobroHandler.deleteCobro(item);
        console.log(response);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Update user, NEED TO IMPROVE
cobroRouter.put('/', auth, async (req, res, next) => {
    try {
        const updateData = req.body;
        const id = req.body.id
        let response = await cobroHandler.updateCobro(id, updateData);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }


});


module.exports = cobroRouter;
