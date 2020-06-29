const express = require('express');
const productoRouter = express.Router();
const auth = require("../../users/auth/auth");
const Egreso = require('../models/egreso');
const Ingreso = require('../models/ingreso');
const Producto = require('../models/producto');

productoRouter.post('/', /*auth,*/ async (req, res) => {
	try {
			const producto = {
				name: req.body.name,
				code: req.body.code,
				location: req.body.location,
				proveedor: req.body.proveedor,
				brand: req.body.brand,
				price: req.body.price
			};	
			let newProducto = new Producto(producto);
			response = await Producto.addProducto(newProducto);
		res.status(200).json(response);
	}	
	catch (e) {
		res.status(400).json(e.toString());
	}	
});	


productoRouter.get('/all', /*auth,*/ async (req, res) => {
	try {
		let response = await Producto.getProductos();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no productos')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


productoRouter.get('/:productoId', /*auth,*/ async (req, res) => {
	try {
		const productoId = req.params.productoId;
		const producto = await Producto.getProducto(productoId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, producto)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
productoRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Producto.deleteProducto(item);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
productoRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Producto.updateProducto(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = productoRouter;
