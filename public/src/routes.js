import React,{ Component } from 'react';
import {Route} from 'react-router';
import RootContainer from './container/RootContainer/'
import AppContainer from './container/AppContainer/'
import IndexContainer from './container/IndexContainer/'

class App extends Component {
	render(){
		return (
			<div>
				123
			</div>
		)
	}
}
export default (store)=>{
	return (
		<Route component={RootContainer}>
			<Route path="/" component={IndexContainer}></Route>
			<Route component={AppContainer}>
				<Route path="/app" component={App}></Route>
			</Route>
		</Route>
	)
}
// <Route path="/" component={Index}></Route>
// <Route component={Layout} onEnter={RequireLogin.onEnter(store)}>
// 	<Route path="/app" component={App}></Route>
// 	<Route path="/teams" component={Teams}></Route>
// </Route>
// <Route path="/register" component={Register} onEnter={RequireLogin.onEnter(store)}></Route>
// <Route path="/login" component={Login} onEnter={Logged.onEnter(store)}></Route>
// <Route path="*" component={Notfound}></Route>
