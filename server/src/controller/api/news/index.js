import _ from 'lodash'
const {
  TeamService,
  NewsService
} = app.service

let News = {}
News.get = function*() {
  let show = this.query.show
  let data
  switch (show) {
    case 'now':
      data = yield NewsService.getNews()
      break
    case 'star':
      data = yield NewsService.bestWeek()
      break
    default:
      data = yield NewsService.getList()
  }
  this.body = data
}
News.post = function*() {
  //body = {
  //  name:'',
  //  leveal:'',
  //  creator:'',
  //  content:'',
  //}
  let body = this.request.body
  let data = yield NewsService.create(body)
  this.body = data
}
export default News
