/**
 * Created by xiaokekeT on 15/8/8.
 */
import req from 'axios'
const HOST= '//127.0.0.1:3000/api'

let  accessApi = (options = {})=>{
	const jwt = localStorage.getItem('jwt')
	let headers = {
		'Content-Type': 'application/json',
		'Authorization': "Bearer "+jwt,
	}
	let url = HOST+options.url
	let params = {...options, headers, url }
	return req(params)
}

let api = (options={})=>{
	let headers = {
		'Content-Type': 'application/json'
	}
	let url = HOST+options.url
	let params = { ...options, headers, url }
	return req(params)
}
export default { api, accessApi }