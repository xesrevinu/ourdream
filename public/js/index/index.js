import React from 'react'
import {
  Button,
  Col
} from 'react-bootstrap'
let Invitation = React.createClass({
  render(){
    return (
      <div>
        <Col lg={3}>
          <div className="panel panel-default">
          <div className="panel-heading">{this.props.data.name}</div>
          <div className="panel-body">
            {this.props.data.description}
          </div>
        </div>
        </Col>
      </div>
    )
  }
})
const invitationUrl = '/api/invitation';

let App = React.createClass({
  getInitialState() {
    return {
      invitations: []
    };
  },
  componentDidMount() {
    $.ajax({
      url:invitationUrl,
      type:'GET'
    }).then((data)=>{
      this.setState({
        invitations: data
      });
    })
  },
  render(){
    var tpls = this.state.invitations.map((tpl)=>{
      return <Invitation data={tpl}/>
    })
    return (
      <div>
        {tpls}
      </div>
    )
  }
})

React.render(<App />,document.getElementById('hi'))