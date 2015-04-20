'use strict'
var _ = require('lodash'),
	default_config = require('./config-server-default'),
	DEV = process.env.NODE_ENV || 'development',
	config = null;

config = default_config;
config.DEV = DEV

if (DEV !== 'development') {	
	config = _.merge(default_config, require('./config-server-'+DEV));
}
module.exports = config;;