import co from 'co'
import passport from 'koa-passport'
import {
  Strategy as LocalStrategy
}
from 'passport-local'
import {
  User
}
from '../model'

export default (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(function* cleanEmptySessionPassport(next) {
    yield * next;
    if (Object.keys(this.session.passport).length === 0) {
      delete this.session.passport;
    }
  });
  passport.serializeUser(function(user, done) {
    console.log(345)
    done(null, user._id)
  })
  passport.deserializeUser(function(id, done) {
    console.log(123)
    User.findById(id, done)
  })
  passport.use(new LocalStrategy(function(email, password, done) {
    console.log(678)
    done(null,{
      _id:123123,
      a:100
    })
  }));
}