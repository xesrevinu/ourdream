import mongoose from 'mongoose'

function connection(url) {
  return mongoose.connect(url);
}
export default connection