/**
 * Created by xiaokekeT on 15/8/5.
 */
require('./stylus/application.styl')
import React, { Component, PropTypes as Types } from 'react'

import AppNavbar from '../Header/index'
import LeftMenu from '../LeftMenu/index'
import Content from '../Content/index'
import cx from 'classnames'

class Application extends Component {
	static propTypes = {
		userActions: Types.object.isRequired,
		auth: Types.object.isRequired
	}
	static contextTypes = {
		router: Types.object.isRequired
	}
	state = {
		showMenu:true
	}
	toggleftMenu(){
		this.setState({
			showMenu:!this.state.showMenu
		})
	}
	render() {
		let show = cx({
			'showMenu':true,
			'none':!this.state.showMenu,
			'show':this.state.showMenu
		})
		return (
			<div className={show}>
				<LeftMenu show={this.state.showMenu} />
				<AppNavbar toggleftMenu={this.toggleftMenu.bind(this)}
				           auth={this.props.auth}
				           authActions={this.props.userActions}
				           router={this.context.router} />
				<Content>
					{this.props.children}
				</Content>
			</div>
		)
	}
}
export default Application
