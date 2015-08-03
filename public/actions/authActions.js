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
import req from 'axios'

export function load() {
	return {
		types: [AUTH_LOAD, AUTH_LOAD_SUCCESS, AUTH_LOAD_FAIL],
		promise: (client) => client.get('/api/login')
	};
}

export function login(data) {
	return dispatch => {
		req({
			url: '//localhost:3000/api/login',
			method: 'post',
			data: data
		}).then((body)=> {
				dispatch({
					type: AUTH_LOGIN_SUCCESS,
					user: body
				})
			})
			.catch((error)=> {
				dispatch({
					type: AUTH_LOGIN_FAIL,
					error: error
				})
			})
	}
}
export function logout() {
	return dispatch => {
		dispatch({
			type: AUTH_LOGOUT_SUCCESS,
			user: null
		})
	}
}