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
import { api, accessApi } from '../libs/api'

export function load(userId) {
	return dispatch=> {
		dispatch({
			type:MESSAGE_LOAD
		})
		accessApi({
			url: '/message/'+userId,
			method: 'GET'
		})
		.then(res=> {
			//setTimeout(()=>{
			//	dispatch({
			//		type:MESSAGE_LOAD_SUCCESS,
			//		data:res.data.data
			//	})
			//},3000)
			dispatch({
				type:MESSAGE_LOAD_SUCCESS,
				data:res.data.data
			})
		})
		.catch(e=> {
			dispatch({
				type:MESSAGE_LOAD_FAIL,
				error:e
			})
		})
	}
}
export function test(data){
	return {
		type:MESSAGE_CREATE_SUCCESS,
		data:data
	}
}
export function toggle(name){
	return {
		type:MESSAGE_TOGGLE,
		name:name
	}
}
export function create(data){
	let { name, content } = data
	return dispatch=>{
		dispatch({
			type:MESSAGE_CREATE_SUCCESS,
			data:data
		})
		//dispatch({
		//	type:MESSAGE_CREATE
		//})
		//accessApi({
		//	url:'/news',
		//	method:'POST',
		//	data:{
		//		name,
		//		content,
		//		date:Date.now()
		//	}
		//})
		//.then(res=>{
		//
		//})
		//.fail(e=>{
		//	dispatch({
		//		type:MESSAGE_CREATE_FAIL,
		//		error:e
		//	})
		//})
	}
}