/**
 * Created by xiaokekeT on 15/8/5.
 */
import React, { Component, PropTypes as Types } from 'react'
import AppNavbar from '../Header/index'
import LeftPanel from '../LeftPanel/index'
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
		showMenu:localStorage.getItem('showMenu') ? true : false
	}
	toggleftMenu(){
		this.setState({
			showMenu:!this.state.showMenu
		},()=>{
			localStorage.setItem('showMenu', !this.state.showMenu)
		})
	}
	render() {
		console.log(localStorage.getItem('showMenu'))
		let show = cx({
			'application':true,
			'showMenu':true,
			'none':!this.state.showMenu,
			'show':this.state.showMenu
		})
		return (
			<div className={show}>
				<LeftPanel show={this.state.showMenu} user={this.props.auth.user} />
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
