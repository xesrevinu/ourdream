/**
 * Created by xiaokekeT on 15/8/12.
 */
import React, { Component, PropTypes as Types } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import Spinner from 'react-spinkit'

@connect(state=>({
	auth:state.auth,
}))
class UserInfo extends Component {
	static propTypes = {
		auth:Types.object.isRequired
	}
	render(){
		let { user } = this.props.auth
		let myTeam = (
			<div>
				<h4>my Teams </h4>
				<ul className="list-group no-borders no-bg no-radius">
					{user.watchs.map((k,i)=>{
						return <li className="list-group-item">{k.name}</li>
					})}
				</ul>
			</div>
		)
		return (
			<div className="col-md-3 col-md-offset-1 user-container">
				{this.props.auth.isLoading ? <Spinner spinnerName="wave" className="message-loading" /> : myTeam }
			</div>
		)
	}
}

export default UserInfo