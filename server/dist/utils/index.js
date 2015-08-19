//import uuid from 'uuid'
//import bcrypt from 'bcrypt'
//
//export default {
//  createUid: function() {
//    let uid = uuid.v1();
//    // return uid.substring(0, 10).replace(/[a-z,-]/g, parseInt(Math.random() * 9))
//    return uuid
//  },
//  bcrypt: {
//    compare: function(data, hash) {
//      return new Promise(function(resolve, reject) {
//        bcrypt.compare(data, hash, function(err, matched) {
//          if (err) {
//            return reject(err);
//          }
//          return resolve(matched);
//        });
//      });
//    },
//    hash: function(data, salt) {
//      return new Promise(function(resolve, reject) {
//        bcrypt.hash(data, salt, function(err, hash) {
//          if (err) {
//            return reject(err);
//          }
//          return resolve(hash);
//        });
//      });
//    },
//    genSalt: function(rounds, ignore) {
//      return new Promise(function(resolve, reject) {
//        bcrypt.genSalt(rounds, ignore, function(err, salt) {
//          if (err) {
//            return reject(err);
//          }
//          return resolve(salt);
//        });
//      });
//    },
//    getRounds: bcrypt.getRounds,
//    genSaltSync: bcrypt.genSaltSync,
//    hashSync: bcrypt.hashSync,
//    compareSync: bcrypt.compareSync
//  }
//}
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var getToken = function getToken(headers) {
	if (headers && headers.authorization) {
		var authorization = headers.authorization;
		var part = authorization.split(' ');

		if (part.length == 2) {
			var token = part[1];
			return token;
		} else {
			return null;
		}
	} else {
		return null;
	}
};

exports.getToken = getToken;