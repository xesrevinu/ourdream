import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'

@connect(state => ({
  state: state
}))
class Hello extends Component {
	static contextTypes = {
		router:PropTypes.object.isRequired,
		store:PropTypes.object.isRequired
	}
	static PropTypes = {

	}
  render(){
    return (
      <div>
	      this is hello page
      </div>
    )
  }
}
export default Hello