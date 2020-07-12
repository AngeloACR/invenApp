const express = require('express');
const ingresoRouter = express.Router();
const auth = require("../../users/auth/auth");
const Ingreso = require('../models/ingreso');

ingresoRouter.post('/', /*auth,*/ async (req, res) => {
	try {
			const ingreso = {
				proveedor: req.body.proveedor,
				almacen: req.body.almacen,
				productosIngresados: req.body.productosIngresados,
				fecha: req.body.fecha,
				estado: req.body.estado,
				referencia: req.body.referencia,
				observaciones: req.body.observaciones,
				proveedor: req.body.proveedor,
			};
			let newIngreso = new Ingreso(ingreso);
			response = await Ingreso.addIngreso(newIngreso);

		res.status(200).json(response);
	}	
	catch (e) {
		res.status(400).json(e.toString());
	}	
});	


ingresoRouter.get('/all', /*auth,*/ async (req, res) => {
	try {
		let response = await Ingreso.getIngresos();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no ingresos')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


ingresoRouter.get('/:ingresoId', /*auth,*/ async (req, res) => {
	try {
		const ingresoId = req.params.ingresoId;
		const ingreso = await Ingreso.getIngreso(ingresoId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, ingreso)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
ingresoRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Ingreso.deleteIngreso(item);
		console.log(response);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
ingresoRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Ingreso.updateIngreso(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = ingresoRouter;
