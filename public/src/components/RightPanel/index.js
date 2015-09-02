/**
 * Created by xiaokekeT on 15/8/21.
 */
import React, { Component, PropTypes as Types } from 'react'

class RightPanel extends Component{
	render(){
		return (
			<div className="col-md-3">
				{this.props}
			</div>
		)
	}
}

export default RightPanel