var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * UserSchema
 * @type {Schema}
 * collection -> 使用mongo那个集合
 * safe -> 安全插入
 */
var UserSchema = new Schema({
	Name:{
		type:String
	},
	ID:{
		type:Number,
		max:10
	}
},{
	collection:'Users',
	safe:true
})

module.exports = mongoose.model('User',UserSchema);