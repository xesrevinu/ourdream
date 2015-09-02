/**
 * Created by xiaokekeT on 15/8/21.
 */
require('./stylus/teamInfo.styl')
import React, { Component, PropTypes as Types } from 'react'
class TeamInfo extends Component{
	static propTypes = {
		data:Types.object
	}
	render(){
		let { name, description, members, message, follow, fans, createdAt } = this.props.data
		return (
			<div className="team-info">
				<div>
					{name}
				</div>
				<div>
					{description}
				</div>
				<div>
					<ul>
						<li>成员{members.length}</li>
						<li>关注人数{follow}</li>
						<li>粉丝数{fans}</li>
						<li>消息数{message}</li>
					</ul>
				</div>
				<div>
					创建于{moment(createdAt).format('ll')}
				</div>
				<div>
					<a className="btn btn-success" href="javascript:void(0)">取消关注</a>
				</div>
			</div>
		)
	}
}
export default TeamInfo