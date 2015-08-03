require('./css/main.scss')

import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import middleware from 'redux-thunk'
import Location from 'react-router/lib/Location'
import HashHistory from 'react-router/lib/HashHistory'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import universalRouter from './universal_router'
import * as reducers from './reducers/index'

let history = new HashHistory()
let history_ = new BrowserHistory()
let location = new Location(document.location.pathname, document.location.search)
let Root = window.Root = document.getElementById('root')

let reducer = combineReducers(reducers)
const store = applyMiddleware(middleware)(createStore)(reducer);

universalRouter(location, history, store).then(({component})=>{
	React.render(component, Root)
},(error)=>{
	console.error(error)
})

