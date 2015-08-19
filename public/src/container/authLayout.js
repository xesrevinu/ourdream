/**
 * Created by xiaokekeT on 15/8/6.
 */
import React, { Component, PropTypes as Types } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'
class authLayout extends Component {
	render(){
		return (
			<div className="container-fuild auth">
				<div className="row">
					{this.props.children}
				</div>
			</div>
		)
	}
}
class AuthLeft extends Component {
	render(){
		return (
			<div className="col-lg-3 left">
				<div className="auth-title">
					{this.props.children}
				</div>
				<div className="auth-doubt">
					<ul>
						<li>
							<a href="">服务使用说明</a>
						</li>
						<li>
							<a href="">服务使用说明</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
class AuthRight extends Component {
	render(){
		return (
			<div className="col-lg-9 right">
				<div className="back-home">
					<Link to="/" title="首页"> <Glyphicon glyph="chevron-left" /> </Link>
				</div>
				<div className="auth-container">
					{this.props.children}
				</div>
			</div>
		)
	}
}
export { AuthLeft, AuthRight }
export default authLayout