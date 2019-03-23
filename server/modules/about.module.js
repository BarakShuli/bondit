const mongoose = require('mongoose');

var aboutSchema = new mongoose.Schema({
	aboutText: String
})

mongoose.model('About', aboutSchema);