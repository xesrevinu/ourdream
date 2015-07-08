import co from 'co';
import passport from 'koa-passport'
import {
  User
} from '../model';

export default {
  createUser: function *(user) {
    let exist = yield User.exist(user.email);
    if(exist){
      throw  '此email已被注册'
    }
    let newUser;
    try{
      newUser = new User(user);
    }catch(e){
      throw '注册失败'
    }
    return yield newUser.save();
  },
  login:function(self){
  }
}