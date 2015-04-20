var _ = require('lodash'),
	util = require('util'),
	LRUCache = require('lrucache'),
	mongoose = require('mongoose'),
	tredis = require('thunk-redis'),
	EventEmitter = require('events').EventEmitter,
	config = require('../../config/config'),
	//MD5 = require('md5'),
	models = require('../Model');

var mongodb = mongoose.connect(config.mongo.host + config.mongo.database, {
	user: config.mongo.user,
	pass: config.mongo.pass
});
var client = tredis.createClient();

/*var redis = redisStore({
	host: config.redis.host,
	port: config.redis.port,
	db: config.redis.db,
	pass: config.redis.pass
}).client;*/

function Cache(model, uCache) {
		//EventEmitter.call(this);
		//console.log(model)
		//var subPubId =  MD5('' + Date.now() + Math.random(), 'base64');
		

		return function (max) {
			this.model = model;
			this.client = uCache;
			this.cache = LRUCache(max);
		}
	}
	//util.inherits(UseCache, EventEmitter);

function UseCache(cacheType, options) {
	this.cacheType = cacheType || 'memory'
	this.options = options || {};
	this.useCacheType();
}

UseCache.prototype.useCacheType = function() {
	switch (this.cacheType) {
		case 'redis':
			this.useRedisCache();
			break;
		case 'memory':
			this.useMemoryCache();
			break;
	}
}

UseCache.prototype.useMemoryCache = function() {
	var capacity = this.options.capacity || 500;
	if (this.cache) {
		return this.cache
	}
	return this.cache = {};
}

UseCache.prototype.useRedisCache = function() {
	var redis = this.options.redis
	if (!redis) {
		return new Error('reids undefined')
	}
	return this.cache = redis;
}

/**
 * 获取model操作 -> find insert save remove
 * 缓存 ？ 缓存 ： 执行查询语句， this.setCache
 */
UseCache.prototype.toCache = function(model) {
	var cache = this.cache;
	return new Cache(model, cache)
}

function Data(model) {
	this.model = model || '';
	this.useCache = new UseCache('redis', {
		redis: client
	});
	return this.load();
};

Data.prototype.load = function() {
	var exportModel = {};
	var self = this;
	// toArray
	if (!_.isArray(this.model)) {
		this.model = _.toArray(this.model);
	}
	if (this.model.length >= 1) {
		var loadModels = this.loadModels(this.model);
		loadModels.forEach(function(model, index) {
			exportModel[self.model[index]] = self.useCache.toCache(model);
		})
	}
	return exportModel;
}

Data.prototype.loadModels = function(loadModels) {
	var _models = [];
	for (var i = 0; i < loadModels.length; i++) {
		var _model = loadModels[i];
		if (models[_model]) {
			_models.push(models[_model]);
		}
	}
	return _models
}

module.exports = Data;