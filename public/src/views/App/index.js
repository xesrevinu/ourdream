/**
 * Created by xiaokekeT on 15/8/21.
 */
import React, { Component, PropTypes as Types } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import Message from '../../components/message/message'
import UserInfo from '../../components/user/card'

class Messages extends Component {
	static contextTypes = {
		router: Types.object.isRequired,
		store: Types.object.isRequired
	}
	render() {
		return (
			<div className="row">
				<Message></Message>
				<UserInfo> </UserInfo>
			</div>
		)
	}
}
export default Messages