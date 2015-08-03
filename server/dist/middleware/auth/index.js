'use strict';

exports.__esModule = true;
exports['default'] = {
   isAuthed: function* isAuthed(next) {
      if (this.isAuthenticated()) {
         yield next;
      } else {
         this.redirect('/login');
      }
   },
   isLogined: function* isLogined(next) {
      if (this.passport.user) {
         this.state.user = this.passport.user;
         yield next;
      } else {
         yield next;
      }
   }
};
module.exports = exports['default'];