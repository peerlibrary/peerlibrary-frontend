var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.make = function make(Schema, mongoose) {
	//Define Journal schema
	var PeriodicalSchema = new Schema({
		title: String,
		issn: Number,
		country: String,
		tags: [String],
		language: String,
		open: Boolean,
		start_year: Number,
		publisher: String
	});
	return mongoose.model('Periodical', PeriodicalSchema);
}