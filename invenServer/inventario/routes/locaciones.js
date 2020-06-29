const express = require('express');
const locacionRouter = express.Router();
const auth = require("../../users/auth/auth");
const Locacion = require('../models/locacion');

locacionRouter.post('/', /*auth,*/ async (req, res) => {
	try {
			const locacion = {
				state: req.body.state,
				code: req.body.code,
				city: req.body.city,
				address: req.body.address,
			};	
			let newLocacion = new Locacion(locacion);
			response = await Locacion.addLocacion(newLocacion);
		res.status(200).json(response);
	}	
	catch (e) {
		res.status(400).json(e.toString());
	}	
});	


locacionRouter.get('/all', /*auth,*/ async (req, res) => {
	try {
		let response = await Locacion.getLocaciones();
		/* if (response.values && response.values.length) {
		} else {
			throw new Error('There are no locacions')
		} */
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});


locacionRouter.get('/:locacionId', /*auth,*/ async (req, res) => {
	try {
		const locacionId = req.params.locacionId;
		const locacion = await Locacion.getLocacion(locacionId);
		const msg = ` ${req.originalUrl} `;
		sendOk(msg, res, locacion)
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Delete user
locacionRouter.delete('/', auth, async (req, res, next) => {
	try {

		const item = req.query.item;

		let response = await Locacion.deleteLocacion(item);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}
});

// Update user, NEED TO IMPROVE
locacionRouter.put('/', auth, async (req, res, next) => {
	try {
		const updateData = req.body;

		let response = await Locacion.updateLocacion(updateData);
		res.status(200).json(response);
	}
	catch (e) {
		res.status(400).json(e.toString());
	}


});

module.exports = locacionRouter;
