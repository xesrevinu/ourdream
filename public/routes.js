import React from 'react';
import {Route} from 'react-router';
import App from './components/app'
import Index from './components/index'
import Hello from './components/hello'
import Login from './components/login/login'
import Notfound from './components/notfound'

let routes = (
	<Route component={App}>
		<Route path="/" component={Index}></Route>
		<Route path="/hello" component={Hello}></Route>
		<Route path="/login" component={Login}></Route>
		<Route path="*" component={Notfound}></Route>
	</Route>
)

export default routes
