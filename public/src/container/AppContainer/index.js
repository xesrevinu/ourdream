/**
 * Created by xiaokekeT on 15/8/5.
 */
import React, { Component, PropTypes as Types } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Application from '../../components/Application/index'
import * as authActions from '../../actions/authActions'


@connect(state=>({
	auth: state.auth
}))
class AppContainer extends Component {
	static propTypes = {
		auth: Types.object.isRequired
	}
	static contextTypes = {
		router: Types.object.isRequired,
		store: Types.object.isRequired
	}
	render() {
    let { dispatch } = this.props
		return (
     <Application auth={this.props.auth} userActions={bindActionCreators(authActions, dispatch)}>
	     {this.props.children}
     </Application>
    )
	}
}
export default  AppContainer
