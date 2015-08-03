import mongoose from 'mongoose'

function connection(url) {
  let conn = mongoose.connect(url)
  return new Promise(function(resolve,reject){
    conn.connection.on('error',function(err){
      reject(err)
    })
    conn.connection.on('disconnected',function(){
      logger('mongo disconnected')
    })
    resolve(conn)
  })
}
export default connection