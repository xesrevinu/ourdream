import mongoose from 'mongoose'

const models = {
  User: require('./user'),
  Post: require('./post')
}

function connection(url) {
  return mongoose.createConnection(url);
}
export {
  models, connection
}