/**
 * Created by xiaokekeT on 15/8/16.
 */
import React,{ Component, PropTypes as Types } from 'react'
import { Link } from 'react-router'
import Spinner from 'react-spinkit'
import cx from 'classnames'


class LeftMenu extends Component{
	static propTypes = {
		show:Types.bool.isRequired
	}
	render(){
		let clasNames = cx({
			'left-menu animated':true,
			'none fadeOut':!this.props.show,
			"show fadeIn":this.props.show
		})
		return (
			<div className={clasNames}>
				<div className="menu-actions">
					<div className="menu-logo">
						<i className="fa fa-connectdevelop fa-2x"> </i>
					</div>
					<ul className="menu-list">
						<li>
							<a href='javascript:void(0)' ><i className="fa fa-edit fa-lg"></i></a>
						</li>
						<li>
							<Link to="/app" className="comment"><i className="fa fa-comment-o fa-lg"></i></Link>
						</li>
						<li>
							<Link to="/teams" className="users"><i className="fa fa-users fa-lg"></i></Link>
						</li>
						<li>
							<Link to="/inbox" className="inbox"><i className="fa fa-inbox fa-lg"></i></Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default LeftMenu
