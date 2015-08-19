export default (app) => {
  require('./helper')(app)
  return async function(next){
	  console.log('this is last middleware')
    await next
  }
}
