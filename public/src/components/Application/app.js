import React, { Component, PropTypes as Types } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import Message from '../message/message'
import UserInfo from '../user/card'



class AppView extends Component {
	static contextTypes = {
		router: Types.object.isRequired,
		store: Types.object.isRequired
	}
	render() {
		return (
			<div className="container-fulid">
				<div className="row">
					<Message></Message>
					<UserInfo> </UserInfo>
				</div>
			</div>
		)
	}
}
export default AppView