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
    done(null, user._id)
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id,'-password',done)
  });
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, function(username, password, done) {
    co(function*() {
      return yield User.verifyPassword(username, password)
    }).then(function(user) {
      done(null, user)
    }).catch(function(err) {
      done(null,false,err.message)
    })
  }))
}