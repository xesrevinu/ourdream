var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostSchem = new Schema({
	title:{
		type:String
	},
	content:{
		type:String
	}
})

module.exports = mongoose.model('Post',PostSchem);