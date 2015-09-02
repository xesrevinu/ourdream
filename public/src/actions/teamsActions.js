/**
 * Created by xiaokekeT on 15/8/21.
 */
import {
	TEAMS_LOAD,
	TEAMS_LOAD_SUCCESS,
	TEAMS_LOAD_FAIL,
	TEAMS_CHANGE_ACTIVE,
	TEAMS_LOADALL,
	TEAMS_LOADALL_SUCCESS,
	TEAMS_LOADALL_FAIL,
	TEAMS_SERACH
} from '../constants/teamsTypes'
import { api, accessApi } from '../libs/api'

export function loadAllTeam(){
	return dispatch=>{
		dispatch({
			type:TEAMS_LOADALL
		})
		api({
			url:'/teams',
			method:'GET'
		})
		.then(res=>{
			return dispatch({
				type:TEAMS_LOADALL_SUCCESS,
				data:res.data.data
			})
		})
		.catch(e=>{
			dispatch({
				type:TEAMS_LOADALL_FAIL
			})
		})
	}
}

export function load(userId){
	return dispatch=>{
		dispatch({
			type:TEAMS_LOAD
		})
		api({
			url:`/user/${userId}/teams`
		})
		.then(res=>{
			return res.data
		})
		.then(data=>{
			return dispatch({
				type:TEAMS_LOAD_SUCCESS,
				data:data.watchs
			})
		})
		.catch(e=>{
			dispatch({
				type:TEAMS_LOAD_FAIL,
				error:e
			})
		})
	}
}
export function serach(name){
	return {
		type:TEAMS_SERACH,
		name:name
	}
}
export function changeActive(index){
	return {
		type:TEAMS_CHANGE_ACTIVE,
		active:parseInt(index)
	}
}