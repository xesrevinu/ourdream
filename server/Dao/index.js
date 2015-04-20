module.exports = function(Data) {
	//console.log(new Data(['User']))
	//var User = new Data(['User'])
	var Model = new Data(['User', 'Post']);

	return {
		User: require('./user')(Model.User)
	}
	// or return Data;
}

//var User = new Data('User');