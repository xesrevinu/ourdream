/**
 * Created by xiaokekeT on 15/8/17.
 */
import React, { Component, PropTypes as Types } from 'react'
import { connect } from 'react-redux'

@connect(state=>({
	state:state
}))
class Teams extends Component{
	componentDidMount(){

	}
	render(){
		let list = this.state.data.data
		return (
			<div>
				{list}
			</div>
		)
	}
}
export default Teams
