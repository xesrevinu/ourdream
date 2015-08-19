"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (app) {
  app.use(function* (next) {
    yield next;
  });
};

module.exports = exports["default"];