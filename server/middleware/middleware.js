var middleware = {};
middleware.middlewareAllTime = function*(next) {
    var l = new Date().getTime();
    yield next;
    console.log(new Date().getTime() - l)
}
module.exports = function(app) {
    return middleware;
}