const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
	let result = renderProtfolioList(req, res);
	res.json(result);
});


function renderProtfolioList(req, res) {	
	return {
		"protfolios": [
			{
				"type": "live",
				"name": "some name",
				"currency": "USD",
				"current_capital": "3,000,000",
				"avg_yield": "4.5%",
				"avg_rating": "AAA",
				"last_update": "1/26/2018"
			},
			{
				"type": "live",
				"name": "some name 2",
				"currency": "EUR",
				"current_capital": "3,245,100",
				"avg_yield": "4.5%",
				"avg_rating": "AAA",
				"last_update": "12/4/2017"
			},
			{
				"type": "proposal",
				"name": "my new proposal",
				"currency": "USD",
				"current_capital": "5,432,546",
				"avg_yield": "2.7%",
				"avg_rating": "BBB",
				"last_update": "2/22/2019"
			},
			{
				"type": "live",
				"name": "some name 3",
				"currency": "EUR",
				"current_capital": "1,499,200",
				"avg_yield": "2.7%",
				"avg_rating": "BBB",
				"last_update": "2/22/2019"
			},
			{
				"type": "proposal",
				"name": "barman proposal",
				"currency": "USD",
				"current_capital": "8,432,546",
				"avg_yield": "1.7%",
				"avg_rating": "AA",
				"last_update": "8/31/2018"
			},
			{
				"type": "live",
				"name": "some name 4",
				"currency": "ILS",
				"current_capital": "499,200",
				"avg_yield": "7.7%",
				"avg_rating": "AAA",
				"last_update": "10/27/2019"
			}
		]
	}
	return obj;
}

module.exports = router;