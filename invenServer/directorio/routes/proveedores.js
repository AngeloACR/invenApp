const express = require('express');
const proveedorRouter = express.Router();
const auth = require("../../users/auth/auth");
const Proveedor = require('../models/proveedor');

proveedorRouter.post('/', /*auth,*/ async (req, res) => {
	try {
		const proveedor = {
			name: req.body.name,
			address: req.body.address,
			ws: req.body.ws,
			ig: req.body.ig,
			mail: req.body.mail,
			rif: req.body.rif,
		};
		let newProveedor = new Proveedor(proveedor);
		response = await Proveedor.addProveedor(newProveedor);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


proveedorRouter.get('/all', /*auth,*/ async (req, res) => {
	try {
		let response = await Proveedor.getProveedores();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no proveedors')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


proveedorRouter.get('/:proveedorId', /*auth,*/ async (req, res) => {
	try {
		const proveedorId = req.params.proveedorId;
		const proveedor = await Proveedor.getProveedor(proveedorId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, proveedor)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
proveedorRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Proveedor.deleteProveedor(item);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
proveedorRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Proveedor.updateProveedor(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = proveedorRouter;