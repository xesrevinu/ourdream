/**
 * Created by xiaokekeT on 15/6/14.
 */
//import React from 'react'
//import Location from 'react-router/lib/Location'
//import router from '../../../public/src/universal_router'
//import { bindActionCreators, createStore, combineReducers, applyMiddleware, compose } from 'redux'
//import * as reducers from '../../../public/src/reducers/index'
//import thunk from 'redux-thunk'

let index = {
	async get(){
		//let finalCreateStore = compose(
		//	applyMiddleware(thunk),
		//	createStore
		//)
		//const reducer = combineReducers(reducers)
		//const store = finalCreateStore(reducer)
		//let location = new Location(this.path,this.query)
		//
		//router(location,undefined,store)
		//.then(({component})=>{
		//		console.log(component)
		//	class A extends React.Component{
		//		render(){
		//			return (
		//				<html lang="en-us">
		//					<head>
		//						<meta charSet="utf-8"/>
		//					</head>
		//					<body>
		//						<div dangerouslySetInnerHTML={{__html: React.renderToString(component)}}></div>
		//					</body>
		//				</html>
		//			)
		//		}
		//	}
		//	this.body = React.renderToString(<A/>)
		//})
		//.catch(e=>{
		//		console.log(e)
		//})
		await this.render('index')
	}
}

export default index
