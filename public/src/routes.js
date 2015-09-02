import React,{ Component } from 'react';
import {Route} from 'react-router';
import RootContainer from './containers/RootContainer/index'
import AppContainer from './containers/AppContainer/index'
import IndexContainer from './containers/IndexContainer/index'
import RegisterContainer from './containers/RegisterContainer/index'
import LoginContainer from './containers/LoginContainer/index'
import TeamsContainer from './containers/TeamsContainer/index'
import TeamsView from'./views/Teams/index'
import TeamInfo from './views/Team/index'
import AppView from './views/App/index'
class App extends Component {
	static contextTypes = {
		router:React.PropTypes.object
	}
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
				<Route path="/app" component={AppView}></Route>
				<Route path="/teams" component={TeamsContainer}></Route>
				<Route path="/teams/me" component={TeamsView}></Route>
				<Route path="/teams/:teamId" component={TeamInfo}></Route>
			</Route>
			<Route>
				<Route path="/register" component={RegisterContainer}></Route>
				<Route path="/login" component={LoginContainer}></Route>
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
