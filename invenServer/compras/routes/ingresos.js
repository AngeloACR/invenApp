const express = require('express');
const ingresoRouter = express.Router();
const auth = require("../../users/auth/auth");
const Ingreso = require('../models/ingreso');
const ingresoHandler = require('../controllers/main').ingresoHandler;

ingresoRouter.post('/', auth, async (req, res) => {
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
		response = await ingresoHandler.addIngreso(ingreso);

		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


ingresoRouter.get('/all', auth, async (req, res) => {
	try {
		let response = await ingresoHandler.getIngresos();
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


ingresoRouter.get('/:ingresoId', auth, async (req, res) => {
	try {
		const ingresoId = req.params.ingresoId;
		let response = await ingresoHandler.getIngreso(ingresoId);
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

		let response = await ingresoHandler.deleteIngreso(item);
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
		const id = req.body._id;

		let response = await ingresoHandler.updateIngreso(id, updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = ingresoRouter;
