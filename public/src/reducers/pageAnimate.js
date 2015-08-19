/**
 * Created by xiaokekeT on 15/8/7.
 */
import {
	PAGE_SWITCH,
	PAGE_SWITCH_DONE,
	PAGE_SWITCH_FAIL
} from '../constants/pageAnimateTypes'

let initialState = {
	loading:false,
	done:false,
	error:null
}
export default function pageAnimate(state = initialState, action = {}){
	let { type } = action
	switch(type){
		case PAGE_SWITCH:
			console.log('start')
			return {
				...initialState,
				loading:true
			}
		case PAGE_SWITCH_DONE:
			console.log('done')
			return {
				...initialState,
				loading:false,
				done:true
			}
		case PAGE_SWITCH_FAIL:
			return {
				...initialState,
				loading:false,
				done:false,
				error:action.error
			}
	}
	return initialState
}