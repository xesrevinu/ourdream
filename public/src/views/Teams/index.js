/**
 * Created by xiaokekeT on 15/8/21.
 */
import React, { Component, PropTypes as Types } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Panel } from 'react-bootstrap'
import * as TeamsActions from '../../actions/teamsActions'
import Spinner from 'react-spinkit'
import TeamList from '../../components/TeamList/index'
import TeamInfo from '../../components/TeamInfo/index'
import RightPanel from '../../components/RightPanel/index'

@connect(state=>({
	teams:state.teams,
	user:state.auth.user
}))
class TeamsContainer extends Component {
	static propTypes = {
		teams:Types.object.isRequired,
		user:Types.object.isRequired
	}
	static contextTypes = {
		router:Types.object.isRequired
	}
	componentDidMount(){
		let { dispatch } = this.props
		this.teamsActions = bindActionCreators(TeamsActions, dispatch)
		if(this.props.user.watchs.length>0){
			this.teamsActions.load(this.props.user._id)
		}
	}
	render(){
		let emtypTeams = (
			<div>
				你目前没有关注的团队
				<p>
					快去关注一些团队，获取最新资讯吧
				</p>
			</div>
		)
		let show = this.props.teams.data ? this.props.teams.data[this.props.teams.active] : {}
		return (
			<div>
				{this.props.teams.loading && this.props.teams.data.length>0 ? <Spinner spinnerName="wave" /> :(
					<div>
						<div className="col-md-8  message-container">
							{this.props.teams.data.length>0 ? <TeamList router={this.context.router} data={this.props.teams.data} teamsActions={this.teamsActions}/> : emtypTeams}
						</div>

						<RightPanel>
							<div>
								<button className="btn btn-success">加入团队</button>
								<button className="btn btn-info">创建团队</button>
							</div>
							{this.props.teams.data.length>0 ? <TeamInfo data={show} /> : '' }
						</RightPanel>
					</div>
				)}
			</div>
		)
	}
}
export default TeamsContainer
