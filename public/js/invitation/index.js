import React from 'react'
import {
  Col,
  Button
} from 'react-bootstrap'

let Commpent = React.createClass({
  render(){
    return (
      <div>
        <Col lg={5}>
          <div className="well">

          </div>
        </Col>
        <Col lg={7} lgOffset={0}>
          <div className="well">
            7
          </div>
        </Col>
      </div>
    )
  }
})
React.render(<Commpent />,document.getElementById('invitation'))