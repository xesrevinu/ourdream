/**
 * Created by xiaokekeT on 15/6/27.
 */
import mongoose from 'mongoose'
import User from './user'
import {
	bcrypt
} from '../utils'
const Schema = mongoose.Schema

const Team = Schema({
	name:{
		type:String,
		required:true,
		index:true
	},
	description:{
		type:String,
		default:"Good Team",
		required:true,
	},
	cover:{
		type:String
	},
	watchers:{
		type:[User.schema]
	},
	members:{
		type:[User.schema]
	},
	type:{
		type:String
	},
	//关注数
	follow:{
		type:Number,
		default:0
	},
	//关注那些人
	follows:{
		type:[User.schema]
	},
	//粉丝数
	fans:{
		type:Number,
		default:0
	},
	//粉丝列表
	fansList:{
		type:[User.schema]
	},
	//发布的消息数量
	message:{
		type:Number,
		default:0
	},
	creator:{
		type:String
	},
	createdAt:{
		type:Date,
		default:Date.now
	}
}, {
	safe: true,
	collection: 'teams'
})

Team.pre('save', function(done) {
	this.members.push(this.creator)
	return done()
})

Team.statics = {
}
Team.methods = {

}
export default mongoose.model('Teams', Team)
