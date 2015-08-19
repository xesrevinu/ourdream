import {
	AUTH_LOAD,
	AUTH_LOAD_SUCCESS,
	AUTH_LOAD_FAIL,
	AUTH_LOGIN,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAIL,
	AUTH_LOGOUT,
	AUTH_LOGOUT_FAIL,
	AUTH_LOGOUT_SUCCESS
} from '../constants/authTypes'
import { api, accessApi } from '../libs/api'
import decode from 'jwt-decode'
import jwtx from 'jsonwebtoken'

export function init(done){
	return dispatch =>{
		dispatch({
			type:AUTH_LOAD
		})
		let jwt = localStorage.getItem('jwt')
		if(jwt && jwt!=='undefined'){
			try{
				accessApi({
					url:'/valid',
					method:'GET'
				})
				.then(()=>{

				})
				let {user ,...e} = jwtx.decode(jwt)
				dispatch({
					type:AUTH_LOAD_SUCCESS,
					user:user
				})
				return done()
			}catch(e){
				dispatch({
					type:AUTH_LOAD_FAIL
				})
			}
		}
		done()
		return dispatch({
			type:AUTH_LOAD_FAIL
		})
	}
}
export function login(data,router) {
	return dispatch => {
		dispatch({
			type:AUTH_LOGIN
		})
		api({
			url: '/login',
			method: 'POST',
			data: data
		})
		.then((res)=> {
			if(res.data.status!==200){
				return dispatch({
					type:AUTH_LOGIN_FAIL,
					errors:res.data.errors
				})
			}
			try {
				let { token } = res.data.data
				localStorage.setItem('jwt', token)
				let { user } = decode(token)
				//setTimeout(()=>{
				//	dispatch({
				//		type: AUTH_LOGIN_SUCCESS,
				//		user: user
				//	})
				//	router.transitionTo('/app')
				//},3000)
				dispatch({
					type: AUTH_LOGIN_SUCCESS,
					user: user
				})
				return router.transitionTo('/app')
			}catch(e){
				dispatch({
					type:AUTH_LOGIN_FAIL,
					errors:'登录失败'
				})
			}
		})
		.catch((error)=> {
			dispatch({
				type: AUTH_LOGIN_FAIL,
				errors: '登录失败'
			})
		})
	}
}
export function logout(router) {
	return dispatch => {
		let jwt = localStorage.removeItem('jwt')
		dispatch({
			type: AUTH_LOGOUT
		})
		accessApi({
			url:'/logout',
			method:'GET'
		})
		.then((res)=>{
			localStorage.removeItem('jwt')
			router.transitionTo('/')
			return dispatch({
				type: AUTH_LOGOUT_SUCCESS,
				user: null
			})
		})
		.catch((e)=>{
			console.log(e)
			alert('退出失败请重试')
			dispatch({
				type: AUTH_LOGOUT_FAIL,
				user: null
			})
		})
	}
}