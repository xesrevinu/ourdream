export default (app)=>{
  app.use(function*(next){
    if(this.app.config.assets){
      this.state.assets = this.app.config.assets
      this.state.assets.prod =true
      this.state.assets.dev = false
    }
    yield next
  })
}
