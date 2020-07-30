const express = require('express');
const proformaRouter = express.Router();
const auth = require("../../users/auth/auth");
const Proforma = require('../models/proforma');

proformaRouter.post('/', auth, async (req, res) => {
    try {
        const proforma = {
            cliente: req.body.cliente,
            productosProformas: req.body.productosProformas,
            vendedor: req.body.vendedor,
            fecha: req.body.fecha,
            estado: req.body.estado,
            montoTotal: req.body.montoTotal,
            condicionVenta: req.body.condicionVenta,
            observaciones: req.body.observaciones,
        };
        let newProforma = new Proforma(proforma);
        response = await Proforma.addProforma(newProforma);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }
});


proformaRouter.get('/all', auth, async (req, res) => {
    try {
        let response = await Proforma.getProformas();
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
        const proforma = await Proforma.getProforma(proformaId);
        const msg = ` ${req.originalUrl} `;
        sendOk(msg, res, proforma)
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

        let response = await Proforma.deleteProforma(item);
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

        let response = await Proforma.updateProforma(updateData);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(400).json(e.toString());
    }


});

module.exports = proformaRouter;
