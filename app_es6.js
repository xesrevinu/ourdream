'use strict'
var patt = /x/

// this is a god-awful hack that future babel versions should alleviate
// igonre 这里只对gulpfile-es6进行babel注册
patt.test = function(str) {
  return str !== __dirname + '/app.js'
}

require('babel/register')({
  //ignore: patt,
  extensions: [".es6", ".js"]
})

require('./app');