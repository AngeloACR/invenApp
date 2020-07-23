const express = require('express');
const almacenRouter = express.Router();
const auth = require("../../users/auth/auth");
const Almacen = require('../models/almacen');

almacenRouter.post('/', /*auth,*/ async (req, res) => {
	try {
		const almacen = {
			state: req.body.state,
			code: req.body.code,
			city: req.body.city,
			address: req.body.address,
		};
		let newAlmacen = new Almacen(almacen);
		response = await Almacen.addAlmacen(newAlmacen);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


almacenRouter.get('/all', /*auth,*/ async (req, res) => {
	try {
		let response = await Almacen.getAlmacenes();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no almacens')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


almacenRouter.get('/:almacenId', /*auth,*/ async (req, res) => {
	try {
		const almacenId = req.params.almacenId;
		const almacen = await Almacen.getAlmacen(almacenId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, almacen)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
almacenRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Almacen.deleteAlmacen(item);
		console.log(response);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
almacenRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Almacen.updateAlmacen(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = almacenRouter;
