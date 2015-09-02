/**
 * Created by xiaokekeT on 15/8/21.
 */
let {
	teamService,
	newsService,
	userService
} = app.service

let User = {

	async getTeams(){
		let userId = this.params.id
		let { watchs } = await userService.getWatchList(userId)
		let teams = []
		for(let team of watchs){
			let { teamId } = team
			teams.push(await teamService.getTeam(teamId))
		}
		this.body = {
			watchs:teams
		}
	}

}


export default User
