const express = require('express');
const movimientoRouter = express.Router();
const auth = require("../../users/auth/auth");
const Movimiento = require('../models/movimiento');

movimientoRouter.post('/', /*auth,*/ async (req, res) => {
	try {
			const movimiento = {
				producto: req.body.state,
				almacen: req.body.code,
				qty: req.body.city,
				fecha: req.body.address,
				reference: req.body.address,
				type: req.body.address,
			};	
			let newMovimiento = new Movimiento(movimiento);
			response = await Movimiento.addMovimiento(newMovimiento);
		res.status(200).json(response);
	}	
	catch (e) {
		res.status(400).json(e.toString());
	}	
});	


movimientoRouter.get('/all', /*auth,*/ async (req, res) => {
	try {
		let response = await Movimiento.getMovimientoes();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no movimientos')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


movimientoRouter.get('/:movimientoId', /*auth,*/ async (req, res) => {
	try {
		const movimientoId = req.params.movimientoId;
		const movimiento = await Movimiento.getMovimiento(movimientoId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, movimiento)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
movimientoRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Movimiento.deleteMovimiento(item);
		console.log(response);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
movimientoRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Movimiento.updateMovimiento(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = movimientoRouter;
