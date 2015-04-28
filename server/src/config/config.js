'use strict'
import _ from 'lodash'
import default_config from './config-server-default'
const dev = process.env.NODE_ENV || 'development'

let config = default_config;
config.dev = dev

if (dev !== 'development') {
  config = _.merge(default_config, require('./config-server-' + dev));
}
export default config