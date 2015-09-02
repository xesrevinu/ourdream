import React from 'react'
import thunk from 'redux-thunk'
import Location from 'react-router/lib/Location'
import HashHistory from 'react-router/lib/HashHistory'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import { bindActionCreators, createStore, combineReducers, applyMiddleware, compose } from 'redux'
import * as reducers from './reducers/index'
import * as authActions from './actions/authActions'
import universalRouter from './universal_router'
import moment from 'moment'
import momentLocal from 'moment/locale/zh-cn'
require('./styles/main.styl')
//全局变量
window.moment = global.moment = moment
const Root = window.Root = document.getElementById('root')
const history = new HashHistory()
const location = new Location(document.location.pathname, document.location.search)

let DEVTOOLS = false
let finalCreateStore

if (DEVTOOLS) {
	const { devTools, persistState } = require('redux-devtools')
  finalCreateStore = compose(
    applyMiddleware(thunk),
		persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    devTools(),
    createStore
  )
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    createStore
  )
}

const reducer = combineReducers(reducers)
const store = finalCreateStore(reducer)

const { dispatch } = store
const userActions = bindActionCreators(authActions, dispatch)

/*
	<DebugPanel>
 		<DevTools store={store} monitor={LogMonitor} />
	</DebugPanel>
*/


userActions.init(()=>{
	let devtools = null;
	if (DEVTOOLS) {
		const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
		devtools = (
			<DebugPanel top right bottom>
				<DevTools store={store} monitor={LogMonitor} />
			</DebugPanel>
		)
	}
	universalRouter(location, history, store).then(({ component })=> {
		//{devtools}
		let components = (
			<div>
				{component}
				{devtools}
			</div>
		)
		React.render(components, Root)
	}, (error)=> {
		throw error
	})
})
