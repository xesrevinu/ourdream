/**
 * Created by xiaokekeT on 15/8/30.
 */
import {
	TEAM_LOAD,
	TEAM_LOAD_SUCCESS,
	TEAM_LOAD_FAIL,
} from '../constants/teamTypes'
import { api, accessApi } from '../libs/api'

export function loadTeam(teamId){
	return dispatch=>{
		dispatch({
			type:TEAM_LOAD
		})
		accessApi({
			url:`/teams/${teamId}`,
			method:'GET'
		})
		.then(res=>{
			return res.data
		})
		.then((data)=>{
			return dispatch({
				type:TEAM_LOAD_SUCCESS,
				data:data.data
			})
		})
		.catch(e=>{
			dispatch({
				type:TEAM_LOAD_FAIL,
				error:e
			})
		})
	}
}