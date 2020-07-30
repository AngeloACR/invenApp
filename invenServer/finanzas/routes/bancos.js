const express = require('express');
const bancoRouter = express.Router();
const auth = require("../../users/auth/auth");
const Banco = require('../models/banco');

bancoRouter.post('/', auth, async (req, res) => {
	try {
		const banco = {
			bank: req.body.bank,
			status: req.body.status,
			alias: req.body.alias,
			accountNumber: req.body.accountNumber,
			saldoInicial: 0,
		};
		let newBanco = new Banco(banco);
		response = await Banco.addBanco(newBanco);
		console.log(response);

		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


bancoRouter.get('/all', auth, async (req, res) => {
	try {
		let response = await Banco.getBancos();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no bancos')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


bancoRouter.get('/:bancoId', auth, async (req, res) => {
	try {
		const bancoId = req.params.bancoId;
		const banco = await Banco.getBanco(bancoId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, banco)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
bancoRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Banco.deleteBanco(item);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
bancoRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Banco.updateBanco(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = bancoRouter;
