import React from 'react'
import {
  Col,
  Button,
  ButtonGroup
} from 'react-bootstrap'

let Commpent = React.createClass({
  getInitialState() {
    return {
      invitationData:{},
      publish:false,
      saved:false,
      loading:false,
      invitationID:$('#invitation').data('tpl-id')
    };
  },
  getTplData(){
    return $.ajax({
      url:`/api/invitation/${this.state.invitationID}`,
      type:'GET'
    })
  },
  saved(data){
    return $.ajax({
      url:`/api/invitation/${this.state.invitationID}`,
      type:'POST',
      data:data
    })
  },
  publish(){
    return $.ajax({
      url:`/api/invitation/${this.state.invitationID}/publish`,
      type:'POST'
    })
  },
  componentWillMount() {
    this.getTplData().then((data)=>{
      this.setState({
        invitationData: data,
        loading:true,
      });
    })
  },
  onSaved(){
    //this.refs.editBox
    this.saved().then((data)=>{

    })
  },
  onPublish(){
    this.publish().then((data)=>{

    })
  },
  loading(){
    /*let loging = (
      <div>
        加载模板中
      </div>
    )
    return this.state.loging ? this.sendTpl() ? loging*/
  },
  render(){
    return (
      <div className="edit-view" >
        <div className="row" >
          <Col lg={12}>
            <span >
              模板设置
            </span>
            <ButtonGroup>
              <Button bsStyle="info" onClick={this.onSaved}> 保存 </Button>
              <Button bsStyle="success" onClick={this.onPublish}> 发布 </Button>
            </ButtonGroup>
          </Col>
          <Col lg={12} >
            <div className="content" >
              <iframe ref="editBox" src="/invitation/{this.state.invitationID}/source" className="editBox">
              </iframe>
            </div>
          </Col>
        </div>
      </div>
    )
  }
})
React.render(<Commpent />,document.getElementById('invitation'))