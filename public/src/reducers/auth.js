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

const initialState = {
	user: null, //用户信息
	errors: null, //错误
	isLoading: false, //登录加载
	isLoggingIn:false, //正在登录
	isLoggedIn: false //是否登录
}

export default function auth(state = initialState, action = {}) {
	let { user, type, errors } = action
	switch (type) {
		case AUTH_LOAD:
			return {
				...state,
				isLoading: true
			}
		case AUTH_LOAD_SUCCESS:
			return {
				...state,
				user: user,
				isLoading: false,
				isLoggedIn:true,
				errors: null
			}
		case AUTH_LOAD_FAIL:
			return {
				...state,
				user:null,
				isLoggedIn: false,
				isLoading:false
			}
		case AUTH_LOGIN:
			return {
				...state,
				user: null,
				isLoggingIn: true,
				errors: null
			}
		case AUTH_LOGIN_SUCCESS:
			return {
				...state,
				user: user,
				isLoading:false,
				isLoggedIn: true,
				isLoggingIn: false,
				errors: null
			}
		case AUTH_LOGIN_FAIL:
			return {
				...state,
				user: null,
				errors: errors,
				isLoggingIn: false
			}
		case AUTH_LOGOUT_SUCCESS:
			return {
				user: null,
				errors: null,
				isLoggingIn: false,
				isLoggedIn:false
			}
		default:
			return state
	}
}