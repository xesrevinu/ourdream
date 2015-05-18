import {
  User,
  Invitation
} from '../../model'
export default {
  show: function*() {
    this.body = yield Invitation.find({
      public:true
    },{
      __v:0
    }).exec()
  },
  select:function *(){
    let tplId = this.params.tplId;
    let detailed = yield Invitation.findById(tplId,{
      __v:0
    }).exec();
    console.dir(detailed)
    return this.body = detailed
  },
  save:function*(){
    this.status=204
  },
  publish:function*(){
    this.status=204
  },
  buy:function*(){

  }
}