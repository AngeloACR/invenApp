const express = require('express');
const pedidoRouter = express.Router();
const auth = require("../../users/auth/auth");
const Pedido = require('../models/pedido');

pedidoRouter.post('/', auth, async (req, res) => {
	try {
			const pedido = {
				cliente: req.body.cliente,
				productosPedidos: req.body.productosPedidos,
				vendedor: req.body.vendedor,
				fecha: req.body.fecha,
				estado: req.body.estado,
				observaciones: req.body.observaciones,
			};
			let newPedido = new Pedido(pedido);
			response = await Pedido.addPedido(newPedido);
		res.status(200).json(response);
	}	
	catch (e) {
		res.status(400).json(e.toString());
	}	
});	


pedidoRouter.get('/all', auth, async (req, res) => {
	try {
		let response = await Pedido.getPedidos();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no pedidos')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


pedidoRouter.get('/:pedidoId', auth, async (req, res) => {
	try {
		const pedidoId = req.params.pedidoId;
		const pedido = await Pedido.getPedido(pedidoId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, pedido)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
pedidoRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Pedido.deletePedido(item);
		console.log(response);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
pedidoRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Pedido.updatePedido(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = pedidoRouter;
