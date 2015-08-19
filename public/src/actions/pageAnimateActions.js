/**
 * Created by xiaokekeT on 15/8/7.
 */
import {
	PAGE_SWITCH,
	PAGE_SWITCH_DONE,
	PAGE_SWITCH_FAIL
} from '../constants/pageAnimateTypes'

export function Switch(dom,cname){
	return (dispatch)=>{
		dom.classList.add(cname)
		dispatch({
			type:PAGE_SWITCH
		})
		dom.addEventListener("webkitAnimationEnd", ()=>{ //动画结束时事件
			dom.classList.remove(cname)
			return dispatch({
				type:PAGE_SWITCH_DONE
			})
		}, false)
		//return dispatch({
		//	type:PAGE_SWITCH_FAIL,
		//	error:'not webkitAnimationEnd'
		//})
	}
}
export function run(dom){
	return function(dispatch){
		return {}
	}
}