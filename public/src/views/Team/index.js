/**
 * Created by xiaokekeT on 15/8/30.
 */
import React, { Component, PropTypes as Types } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { message } from '../../components/message/message'
import * as TeamActions from '../../actions/teamActions'

@connect(state=>({
	team:state.team
}))
class TeamInfo extends Component {
	static propTypes = {
		team:Types.object.isRequired
	}
	static contextTypes = {
		router:Types.object.isRequired
	}
	state = {
		data:[]
	}
	componentDidMount(){
		let { params, dispatch } = this.props
		this.teamActions = bindActionCreators(TeamActions, dispatch)
		this.teamActions.loadTeam(params.teamId)
	}
	render() {
		let team = this.props.team.data ? this.props.team.data : {}
		return (
			<div className="message-container">
				{this.props.team.loading ? 'loading' : (
					<div className="team-default">
						<div className="col-md-11 team-header">
							<img className="img-responsive img-circle" src={team.cover} alt="teamHead" />
							<div>
								<h3>{team.name}</h3>
								<h4>{team.description}</h4>
							</div>
						</div>
						<div className="col-md-6">
							<div className="box">
								<h2>所有消息</h2>
								<div className="messages">
									{team.message ? (
										<div>
											123
										</div>
									) : "还没有发布过消息"}
								</div>
							</div>
						</div>
						<div className="col-md-5 ">
							<div className="box">
								<h2>团队介绍</h2>
								<div>
									{team.description}
								</div>
							</div>
							<div className="box">
								<h2>123</h2>
								<div>123</div>
							</div>
							<div className="box">
								<h2>所有成员</h2>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}
export default TeamInfo