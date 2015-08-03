/**
 * Created by xiaokekeT on 15/8/2.
 */
import React,{ Component, PropTypes as Types } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'react-bootstrap'
import * as AuthActions from '../../actions/authActions'

class Login extends Component {
	static propTypes = {
		auth: Types.object.isRequired,
		authActions: Types.object.isRequired
	}
	static contextTypes = {
		router: Types.object.isRequired
	}
	render() {
		let { login, logout } = this.props.authActions
		return (
			<div>
				{this.props.auth.user}
				<Button onClick={login}> Login </Button>
				<Button onClick={logout}> Logout</Button>
			</div>
		)
	}
}

@connect(state=>({
	auth: state.auth
}))
class LoginContainer extends Component {
	static propTypes = {
		auth: Types.object.isRequired,
		dispatch: Types.func.isRequired
	}
	render() {
		let { auth, dispatch } = this.props
		return <Login auth={auth} authActions={bindActionCreators(AuthActions,dispatch)} {...this.props}></Login>
	}
}
export default LoginContainer
