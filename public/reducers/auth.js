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
	loaded: false,
	user: null,
	errors: null,
	isLoading: false
}

export default function auth(state = initialState, action = {}) {
	let { user, type } = action
	switch (type) {
		case AUTH_LOAD:
			return {
				...state,
				loaded: true,
			}
		case AUTH_LOGIN_SUCCESS:
			console.log('login success')
			return {
				...state,
				user: user
			}
		case AUTH_LOGIN_FAIL:
			return state
		case AUTH_LOGOUT_SUCCESS:
			return {
				user: null,
				errors: null,
				isLoading: false
			}
		default:
			return state
	}
}