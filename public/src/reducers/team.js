/**
 * Created by xiaokekeT on 15/8/30.
 */
import {
	TEAM_LOAD,
	TEAM_LOAD_SUCCESS,
	TEAM_LOAD_FAIL,
} from '../constants/teamTypes'

let initialState = {
	loading:false,
	data:null,
	error:null
}
export default function team(state = initialState, actions = {}){
	let { type } = actions
	switch(type){
		case TEAM_LOAD:
			return {
				...state,
				loading:true
			}
		case TEAM_LOAD_SUCCESS:
			return {
				...state,
				loading:false,
				data:actions.data,
			}
		case TEAM_LOAD_FAIL:
			return {
				...state,
				loading:false,
				data:null,
				error:actions.error
			}
	}
	return state
}