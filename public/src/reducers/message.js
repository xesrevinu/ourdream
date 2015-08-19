/**
 * Created by xiaokekeT on 15/8/12.
 */
import {
	MESSAGE_LOAD,
	MESSAGE_LOAD_SUCCESS,
	MESSAGE_LOAD_FAIL,
	MESSAGE_CREATE,
	MESSAGE_CREATE_SUCCESS,
	MESSAGE_CREATE_FAIL,
	MESSAGE_TOGGLE
} from '../constants/messageTypes'

let initialState = {
	isLoading:false,
	data:[],
	odata:[],
	error:null,
	createing:false,
}
export default function message(state = initialState, actions = {}) {
	let { type, error, data } = actions
	switch(type){
		case MESSAGE_LOAD:
			return {
				...state,
				isLoading:true
			}
		case MESSAGE_LOAD_SUCCESS:
			return {
				...state,
				isLoading:false,
				data:data,
				odata:data
			}
		case MESSAGE_LOAD_FAIL:
			return {
				...state,
				isLoading:false,
				data:[],
				error:error
			}
		case MESSAGE_CREATE:
			return {
				...state,
				createing:true
			}
		case MESSAGE_CREATE_SUCCESS:
			return {
				...state,
				createing:false,
				data:[data, ...state.data],
				odata:[data, ...state.data]
			}
		case MESSAGE_CREATE_FAIL:
			return {
				...state,
				createing:false,
				error:actions.error
			}
		case MESSAGE_TOGGLE:
			let toggleData = [...state.odata]
			if(actions.name!=='all'){
				toggleData = toggleData.filter((k)=>{
					return k.name==actions.name
				})
			}
			return {
				...state,
				data:toggleData
			}
	}
	return state
}