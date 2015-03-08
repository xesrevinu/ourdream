var _ = require('lodash'),
	models = require('../Model');

function Data(modelName) {
	//this.modelName = modelName || '';
	return this.getModel(modelName);
};

Data.prototype.getModel = function(modelName) {
	var model = models[modelName]
	if(!model){
		return new Error(modelName+'is undefined Model');
	}
	return models[modelName]
};
Data.prototype._get = function() {

}
Data.prototype._set = function(data) {

}
Data.getModels = function (models){

}

module.exports = Data;