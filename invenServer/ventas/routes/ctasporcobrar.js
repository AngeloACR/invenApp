const express = require('express');
const ctaporcobrarRouter = express.Router();
const auth = require("../../users/auth/auth");
const ctaPorCobrarHandler = require('../controllers/main').ctaPorCobrarHandler;
const ventasHandler = require('../controllers/main').mainHandler;

ctaporcobrarRouter.post('/', auth, async (req, res) => {
    try {
        const ctaporcobrar = {
            cliente: req.body.cliente,
            proforma: req.body.proforma,
            status: req.body.status,
            montoTotal: req.body.montoTotal,
        };

        let response = await ctaPorCobrarHandler.addCtaporcobrar(ctaporcobrar);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


ctaporcobrarRouter.get('/all', auth, async (req, res) => {
    try {
        let response = await ctaPorCobrarHandler.getCtasporcobrar();

        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


ctaporcobrarRouter.get('/:ctaporcobrarId', auth, async (req, res) => {
    try {
        const ctaporcobrarId = req.params.ctaporcobrarId;
        let response = await ctaPorCobrarHandler.getCtaporcobrar(ctaporcobrarId);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Delete user
ctaporcobrarRouter.delete('/', auth, async (req, res, next) => {
    try {

        const item = req.query.item;

        let response = await ctaPorCobrarHandler.deleteCtaporcobrar(item);
        console.log(response);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Update user, NEED TO IMPROVE
ctaporcobrarRouter.put('/', auth, async (req, res, next) => {
    try {
        const updateData = req.body;
        const id = req.body.id
        let response = await ctaPorCobrarHandler.updateCtaporcobrar(id, updateData);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }


});


module.exports = ctaporcobrarRouter;
