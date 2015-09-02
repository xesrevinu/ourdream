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
import lodash from 'lodash'
let initialState = {
	active:0,
	loading:false,
	data:[],
	allTeams:[],
	error:null
}

export default function teams(state = initialState, actions = {}){
	let { type } = actions
	switch(type){
		case TEAMS_LOAD:
			return {
				...state,
				loading:true
			}
		case TEAMS_LOAD_SUCCESS:
			return {
				...state,
				loading:false,
				data:actions.data
			}
		case TEAMS_LOAD_FAIL:
			return {
				...state,
				loading:false,
				error:actions.error
			}
		case TEAMS_LOADALL:
			return {
				...state
			}
		case TEAMS_LOADALL_SUCCESS:
			return {
				...state,
				allTeams:actions.data
			}
		case TEAMS_LOADALL_FAIL:
			return {
				...state
			}
		case TEAMS_SERACH:
			let serach = actions.name ? state.allTeams : [...state.allTeams].filter(k=>{
				return k.name == actions.name
			})
			return {
				...state,
				allTeams:serach
			}
		case TEAMS_CHANGE_ACTIVE:
			return {
				...state,
				active:actions.active > state.data.length ? 0 : actions.active
			}
	}
	return state
}