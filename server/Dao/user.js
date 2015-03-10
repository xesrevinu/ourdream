module.exports = function(UserData) {
	/**
	 * 设置缓存为1000key
	 */
	UserData.prototype.findUserName = function(name, callback) {
		/**
		 * todo name-> hash
		 */
		var namehash = name;
		if (this.cache.get(namehash)) {
			return this.cache.get(namehash)
		} else {
			var data = {
				name: name,
				age: 1230,
				id: parseInt(Math.random() * 1000)
			};
			this.cache.set(name, data);
			return callback(null, data);
			/**
			 * todo
			 * or require('../action/user')
			 * var data = yield user.findUserName(name)
			 */
			/*this.model.find({
				name:name
			},function (){

			})*/
		}
	}
	return new UserData(1000);
}