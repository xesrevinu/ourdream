import _ from 'lodash'
import defaultConfig from './config-default'
const env = process.env.NODE_ENV || 'development'

let config = defaultConfig
config.env = env

if (env !== 'development') {
  config = _.merge(defaultConfig, require('./config-' + env))
}
export default config
