const express = require('express');

let router = express.Router();

router.post('/', (req, res) => {
	checkLogin(req, res);
});


function checkLogin(req, res) {	
	let bodyObj = req.body;
	let result = {status:500};
	if (bodyObj.orgId !== '' && bodyObj.userName !== '' && bodyObj.password !== '')
	{
		result = {status:200};
	}
	throw Error("dddd"); // sample
	res.json(result);
}

module.exports = router;