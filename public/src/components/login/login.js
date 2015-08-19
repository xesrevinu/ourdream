/**
 * Created by xiaokekeT on 15/8/2.
 */
import React,{ Component, PropTypes as Types } from 'react'
import cx from 'react/lib/cx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Glyphicon, Input } from 'react-bootstrap'
import { Link } from 'react-router'
import Spinner from 'react-spinkit'
import AuthLayout,{ AuthLeft, AuthRight} from '../layout/authLayout'
import * as AuthActions from '../../actions/authActions'

class LoginForm extends Component {
	static propTypes = {
		auth: Types.object.isRequired,
		authActions: Types.object.isRequired
	}
	static contextTypes = {
		router: Types.object.isRequired
	}
	state = {
		user:'',
		pass:''
	}
	componentDidMount(){
		if(this.props.auth.isLoggedIn && this.props.auth.user){
			this.context.router.transitionTo('/app')
		}
	}
	onSubmit(e){
		this.props.authActions.login(this.state,this.context.router)
	}
	Change(e){
		let name = e.target.name
		let state  = {}
		state[name]= this.refs[name].getValue()
		this.setState(state)
	}
	render(){
		let { isLoggingIn, errors} = this.props.auth
		let loading = cx({
			'loading':isLoggingIn,
			'loading-fail':errors
		})
		return (
			<form>
				<div className="form-unit">
					{this.props.auth.errors}
					<h2>登录 <span>{this.props.auth.isLoggingIn ? <Spinner spinnerName='wave' className={loading}/> : '' }</span></h2>
					<Input type="text" addonBefore={<Glyphicon glyph="user"/>} value={this.state.user} onChange={::this.Change} name="user" ref="user" placeholder="用户名" aria-describedby="basic-addon1" />
					<Input type="password" addonBefore={<Glyphicon glyph="eye-open"/>} value={this.state.pass} onChange={::this.Change} name="pass" ref="pass" placeholder="密码" aria-describedby="basic-addon1" />
					<div className="form-group form-submit">
						<a className="btn  btn-ghost" href="javascript:void(0)" onClick={::this.onSubmit}>登录</a>
					</div>
					<div className="form-group form-prompt">
						<p><Link to="register">没有有帐号？ 注册</Link></p>
						<p><Link to="forgotPass">忘记密码</Link></p>
					</div>
				</div>
			</form>
		)
	}
}
class Login extends Component {
	static propTypes = {
		auth: Types.object.isRequired,
		authActions: Types.object.isRequired
	}
	static contextTypes = {
		router: Types.object.isRequired
	}
	render() {
		let { auth, authActions } = this.props
		return (
			<AuthLayout>
				<AuthLeft >
					<p className="h3">感谢使用 Ourdream</p>
					<p>
						请在右侧填写你的信息进行登录
					</p>
				</AuthLeft>
				<AuthRight >
					<LoginForm auth={auth} authActions={authActions}  />
				</AuthRight>
			</AuthLayout>
		)
	}
}

@connect(state=>({
	auth: state.auth
}))
class LoginContainer extends Component {
	static propTypes = {
		auth: Types.object.isRequired,
		dispatch: Types.func.isRequired,
	}
	componentDidMount(){
	}
	render() {
		let { auth, dispatch } = this.props
		return <Login auth={auth} authActions={bindActionCreators(AuthActions,dispatch)} {...this.props}></Login>
	}
}
export default LoginContainer
