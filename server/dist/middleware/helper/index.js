"use strict";

exports.__esModule = true;

exports["default"] = function (app) {
  app.use(function* (next) {
    if (this.app.config.assets) {
      this.state.assets = this.app.config.assets;
      this.state.assets.prod = true;
      this.state.assets.dev = false;
    }
    yield next;
  });
};

module.exports = exports["default"];