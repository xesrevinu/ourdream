import React, { Component, PropTypes as Types } from 'react'

//class App extends Component {
//	static propTypes = {
//		userActions:Types.object.isRequired,
//	}
//	componentDidMount() {
//		let pageAinmate = (cname)=>{
//			this.props.pageAnimateActions.Switch(document.getElementById('app'),cname)
//		}
//		pageAinmate('fadeIn')
//	}
//	render() {
//		return (
//			<div id="app" className="animated">
//				{this.props.children}
//			</div>
//		)
//	}
//}

class RootContainer extends Component {
	static contextTypes = {
		router: Types.object.isRequired
	}
	render() {
		return this.props.children
	}
}

export default RootContainer
