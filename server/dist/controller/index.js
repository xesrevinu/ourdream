'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  sendIndex: regeneratorRuntime.mark(function sendIndex(next) {
    return regeneratorRuntime.wrap(function sendIndex$(context$1$0) {
      var _this = this;

      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:

          this.state = {
            message: 'hello'
          };

          setTimeout(function () {
            _this.app.socket.emit('hello', {
              name: 'Kee'
            });
          }, 2000);

          context$1$0.next = 4;
          return this.render('index');

        case 4:
        case 'end':
          return context$1$0.stop();
      }
    }, sendIndex, this);
  })
};
module.exports = exports['default'];