/**
 * Created by xiaokekeT on 15/8/21.
 */
import React, { Component, PropTypes as Types } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TeamsActions from '../../actions/teamsActions'
import { ButtonGroup, Button } from 'react-bootstrap'

@connect(state=>({
	teams:state.teams
}))
class Teams extends Component{
	static propTypes = {

	}
	componentDidMount(){
		let { dispatch } = this.props
		this.teamsActions = bindActionCreators(TeamsActions, dispatch)
		this.teamsActions.loadAllTeam()
	}
	render(){
		let items = []
		/*<div className="team-card-footer">

		</div>*/
		if (this.props.teams.allTeams.length){
			this.props.teams.allTeams.map((k, i)=>{
				let x = (
					<div key={i} className="team-card">
						<div className="content">
							{k.name}
						</div>
					</div>
				)
				items.push(x)
			})
		}
		return (
			<div className="row">
				<div className="message-container">
					{this.props.teams.allTeams ? (
						<div>
							<SerachTeam teamsActions={this.teamsActions}/>
							{items}
						</div>
					): 'no team'}
				</div>
			</div>
		)
	}
}

class SerachTeam extends Component {
	onChange(e){
		this.props.teamsActions.serach(e.target.value)
	}
	render() {
		return (
			<div>
				<input type="text" onChange={this.onChange.bind(this)}/>
			</div>
		)
	}
}
export default Teams