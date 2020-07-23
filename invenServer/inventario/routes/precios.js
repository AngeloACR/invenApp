const express = require('express');
const precioRouter = express.Router();
const auth = require("../../users/auth/auth");
const Precio = require('../models/precio');

precioRouter.post('/', auth, async (req, res) => {
	try {
		const precio = {
			producto: req.body.producto,
			valor: req.body.valor
		};
		let newPrecio = new Precio(precio);
		response = await Precio.addPrecio(newPrecio);

		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


precioRouter.get('/all', auth, async (req, res) => {
	try {
		let response = await Precio.getPrecios();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no precios')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


precioRouter.get('/:precioId', auth, async (req, res) => {
	try {
		const precioId = req.params.precioId;
		const precio = await Precio.getPrecio(precioId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, precio)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
precioRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Precio.deletePrecio(item);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
precioRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Precio.updatePrecio(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = precioRouter;
