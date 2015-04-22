var patt = /x/

// this is a god-awful hack that future babel versions should alleviate
// igonre 这里只对gulpfile-es6进行babel注册
patt.test = function(str) {
  return str !== __dirname + '/gulpfile-es6.js'
}

require('babel/register')({
  ignore: patt
})

require('./gulpfile-es6');