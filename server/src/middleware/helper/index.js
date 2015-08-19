export default (app)=>{
  app.use(function*(next){
    yield next
  })
}
