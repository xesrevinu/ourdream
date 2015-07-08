import mongoose from 'mongoose'
import moment from 'moment'
import {
  bcrypt
} from '../utils'
const Schema = mongoose.Schema;

const News = Schema({
  //属于那个Team
  teamId:{
    type:String
  },
  //Team名
  name:{
    type:String
  },
  // 0-普通,1-重要,2-紧急
  leveal:{
    type:Number,
    default:0
  },
  //发布者Id
  creator:{
    type:String
  },
  //内容
  content:{
    type:String
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  views:{
    type:Number,
    default:1
  },
  star:{
    type:Number,
    default:0
  }
}, {
  safe: true,
  collection: 'news',
  toJSON: {
    transform: function(doc, ret, options) {

    }
  }
})


News.statics = {
}
News.methods = {

}
export default mongoose.model('News', News)
