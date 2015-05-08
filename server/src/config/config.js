'use strict'
import _ from 'lodash'
import default_config from './config-server-default'
const env = process.env.NODE_ENV || 'development'

let config = default_config;
config.env = env

if (env !== 'development') {
  config = _.merge(default_config, require('./config-server-' + env));
}
export default config