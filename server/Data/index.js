var _ = require('lodash'),
	util = require('util'),
	EventEmitter = require('events').EventEmitter,
	models = require('../Model');

function Cache(){
	return {};
}
Cache.prototype.get = function (){

}
Cache.prototype.set = function (){

}

function UseCache(cacheType, options) {
	EventEmitter.call(this)
	this.cacheType = cacheType || 'memony';
	this.options = option || {};
}
util.inherits(MongoCache, EventEmitter);

/**
 * 获取model操作 -> find insert save remove 
 * 缓存 ？ 缓存 ： 执行查询语句， this.setCache 
 */
UseCache.prototype.toCache = function(model) {
	this.getCache(this.cacheType);
	
	// TODU
	return model;
}

UseCache.prototype.getCache = function(cacheType) {
	switch cacheType{
		case 'redis':
			break
		default 'memony':
			this.cache = new Cache('memony');
	}
	return this;
}

function Data(model) {
	this.model = model || '';
	this.useCache = new UseCache();
	return this.load();
};
Data.prototype.load = function() {
	var exportModel = {};
	var self = this;
	// toArray
	if (!_.isArray(this.model)) {
		this.model = _.toArray(this.model);
	}
	if (this.model.length > 1) {
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