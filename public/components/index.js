import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { Jumbotron, Button } from 'react-bootstrap'
import * as appAction from '../actions/CounterActions'

@connect((state)=>({
	state:state
}))
class Index extends Component {
  static contextTypes = {
    router:PropTypes.object,
    store:PropTypes.object
  }
  render(){
    return (
      <div className="container">
	      <Jumbotron>
		      <h1>Hello, world!</h1>
		      <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
		      <p><Button bsStyle='primary'>Learn more</Button></p>
	      </Jumbotron>
	      this is index page
      </div>
    )
  }
}
export default Index