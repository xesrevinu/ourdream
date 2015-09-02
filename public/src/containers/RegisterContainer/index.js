/**
 * Created by xiaokekeT on 15/8/19.
 */
import React,{ Component, PropTypes as Types } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Glyphicon, Input} from 'react-bootstrap'
import { Link } from 'react-router'
import AuthLayout,{ AuthLeft, AuthRight } from '../../components/AuthLayout/index'
import * as AuthActions from '../../actions/authActions'

class Register extends Component {
	static propTypes = {
		auth: Types.object.isRequired,
		authActions: Types.object.isRequired
	}
	static contextTypes = {
		router: Types.object.isRequired
	}
	componentDidMount(){
		//if(this.props.auth.isLoggedIn && this.props.auth.user){
		//	this.context.router.transitionTo('/app')
		//}
	}
	render() {
		let { login, logout } = this.props.authActions
		return (
			<AuthLayout>
				<AuthLeft >
					<p className="h3">感谢使用 Ourdream</p>
					<p>
						现在您将注册一个帐号，请在右侧填写你的信息
					</p>
				</AuthLeft>
				<AuthRight >
					<form>
						<div className="form-unit">
							<h1>注册</h1>
							<Input type="text" addonBefore={<Glyphicon glyph="envelope"/>} placeholder="Email" aria-describedby="basic-addon1" />
							<Input type="text" addonBefore={<Glyphicon glyph="user"/>} placeholder="Username" aria-describedby="basic-addon1" />
							<Input type="password" addonBefore={<Glyphicon glyph="eye-open"/>}  placeholder="password" aria-describedby="basic-addon1" />
							<div className="form-group form-submit">
								<a className="btn  btn-ghost" href="javascript:void(0)">注册</a>
							</div>
							<div className="form-group form-prompt">
								<Link to="login">已有帐号，登录？</Link>
							</div>
						</div>
					</form>
				</AuthRight>
			</AuthLayout>
		)
	}
}

@connect(state=>({
	auth: state.auth
}))
class RegisterContainer extends Component {
	static propTypes = {
		auth: Types.object.isRequired,
		dispatch: Types.func.isRequired
	}
	render() {
		let { auth, dispatch } = this.props
		return <Register auth={auth} authActions={bindActionCreators(AuthActions,dispatch)} {...this.props}></Register>
	}
}
export default RegisterContainer
