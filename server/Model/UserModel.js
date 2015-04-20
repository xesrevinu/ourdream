var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * UserSchema
 * @type {Schema}
 * collection -> 使用mongo那个集合
 * safe -> 安全插入
 */
var UserSchema = new Schema({
	password:{
		type:String
	},
	id:{
		type:Number
	}
},{
	collection:'Users',
	safe:true
})

module.exports = mongoose.model('User',UserSchema);