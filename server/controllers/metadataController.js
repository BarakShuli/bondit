require('../modules/about.module')
const mongoose = require('mongoose');
const About = mongoose.model('About');
const express = require('express');

var router = express.Router();



router.get('/', (req, res) => {
	let metadata = getMetaDataList(req, res);
	res.json(metadata);
});


function getMetaDataList(req, res) {	
	return {
		"metadata": [{
			"type": "Protfolio Type",
			"name": "Protfolio Name",
			"currency": "Currency",
			"current_capital": "Current Capital",
			"avg_yield": "Avg Yield",
			"avg_rating": "Avg Rating",
			"last_update": "Last Update"
		}]
	}
}

module.exports = router;