const express = require('express');
const proformaRouter = express.Router();
const auth = require("../../users/auth/auth");
const proformaHandler = require('../controllers/main').proformaHandler;
const ventasHandler = require('../controllers/main').mainHandler;

proformaRouter.post('/', auth, async (req, res) => {
    try {
        const proforma = {
            pedido: req.body.pedido,
            cliente: req.body.cliente,
            productosAutorizados: req.body.productosAutorizados,
            fecha: req.body.fecha,
            montoTotal: req.body.montoTotal,
            observaciones: req.body.observaciones,
        };
        let cobros = req.body.cobros,

            response = await proformaHandler.addProforma(proforma, cobros);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


proformaRouter.get('/all', auth, async (req, res) => {
    try {
        let response = await proformaHandler.getProformas();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no proformas')
		} */
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


proformaRouter.get('/:proformaId', auth, async (req, res) => {
    try {
        const proformaId = req.params.proformaId;
        let response = await proformaHandler.getProforma(proformaId);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Delete user
proformaRouter.delete('/', auth, async (req, res, next) => {
    try {

        const item = req.query.item;

        let response = await proformaHandler.deleteProforma(item);
        console.log(response);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});

// Update user, NEED TO IMPROVE
proformaRouter.put('/', auth, async (req, res, next) => {
    try {
        const updateData = req.body;
        const id = req.body._id;

        let response = await proformaHandler.updateProforma(id, updateData);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }


});

proformaRouter.put('/cobro', auth, async (req, res, next) => {
    try {
        const proforma = req.body.proforma;
        let cobro = {
            banco: req.body.banco,
            monto: req.body.monto,
        }

        let response = await ventasHandler.agregarCobro(proforma, cobro);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }


});


module.exports = proformaRouter;
