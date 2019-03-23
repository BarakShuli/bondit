const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Barman', {useNewUrlParser: true}, (err) => {
	if (!err) {
		console.log("success - connected to mogodb");
	} else {
		console.log("error - not connected to mogodb ", err);
	}
});