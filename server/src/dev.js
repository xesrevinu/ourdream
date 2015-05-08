import co from 'co'
import _ from 'lodash'
import {
  User,
  Invitation
}
from './model'
var template = [{
  name: '婚礼',
  type: '婚礼',
  description: '简介简介',
  cover: 'http://img.hb.aicdn.com/838eda61bc5bacd4a92de10a92247b6d5e194abe22da0-yc17Dd_sq320',
  level: 1,
  template: '/'
}, {
  name: '同学会',
  type: '聚会',
  description: '简介简介',
  cover: 'http://img.hb.aicdn.com/339e62d9d15c1e984ed5871bcb9503e4b48e268be066-BUnYem_sq320',
  level: 1,
  template: '/'
}, {
  name: '奢华酒会',
  type: '聚会',
  description: '简介简介',
  cover: 'http://img.hb.aicdn.com/f3a8665855c9c61759a96604b0fd485f3c4e849616838-ar4eZa_sq320',
  level: 1,
  template: '/'
}, {
  name: '清新宝贝',
  type: '满月酒',
  description: '简介简介',
  cover: 'http://img.hb.aicdn.com/a9d505b3e84871cbb30891807de6ed1f26f701581e6d6-DzIUj3_sq320',
  level: 1,
  template: '/'
}]
co(function*() {
  let user =
    yield User.find().exec();

  if (_.isNull(user)) {
    let newUser = new User({
      email: 'test@qq.com',
      password: 'test',
      name: 'test'
    })
    return yield newUser.save()
  }
  return user[0]
}).then((user) => {
  co(function*() {
    yield Invitation.remove().exec()
    for (let i = 0; i < template.length; i++) {
      var x = new Invitation(template[i])
      yield x.save()
    }
  })
})