/**
 * Created by xiaokekeT on 15/8/21.
 */
require('./stylus/teamList.styl')
import React, { Component, PropTypes as Types, cloneElement} from 'react'
import { Link } from 'react-router'
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup'

class TeamList extends Component{
	static propTypes = {
		data:Types.array,
		teamActions:Types.object.isRequired,
		router:Types.object.isRequired
	}
	Click(i, e){
		this.props.teamsActions.changeActive(i)
	}
	teams(teamId,e){
		e.stopPropagation()
		this.props.router.transitionTo('/teams/'+teamId)
	}
	render(){
		let list = this.props.data.map((k,i)=>{
			return (
				<div key={i} className="team-list" onClick={this.Click.bind(this,i)}>
					{k.name}
					<a href="javascript:void(0)" onClick={this.teams.bind(this,k._id)}>消息{k.message}</a>
				</div>
			)
		})
		return (
			<div className="team-content">
				{list}
			</div>
		)
	}
}
export default TeamList