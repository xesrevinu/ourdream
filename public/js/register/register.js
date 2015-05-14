import React from 'react'
import cset from 'classnames/dedupe'
import dialog from '../dialog'
import {
  Input,
  Glyphicon,
  Button,
  Col
} from 'react-bootstrap'
const registerUrl = '/register'
let Register = React.createClass({
  getInitialState(){
    return {
      disabled: false,
      error:{
        password:false,
        email:false
      },
      success:{
        password:false,
        email:false
      },
      email:'',
      password:'',
      remember:'',
      isLoading:false,
    }
  },
  send(){
    const self = this;
    this.setState({
      error: {
        email: false,
        password:false
      }
    })
    return $.ajax({
      type:'POST',
      url:registerUrl,
      data:{
        email:self.state.email,
        password:self.state.password,
        remember:self.state.remember
      }
    })
  },
  onHandleSubmit(e){
    e.preventDefault();
    let email = this.refs.email.getValue().trim(),
        pass = this.refs.password.getValue().trim(),
        pass_ = this.refs.password_.getValue().trim();
    if(!email){
      dialog.error('请输入email地址');
      this.setState({
        error:{
          email:true
        },
      })
      return
    }else if(!pass){
      dialog.error('请输入密码');
      this.setState({
        error:{
          password:true
        },
      })
      return
    }else if(pass !== pass_){
      dialog.error('两次输入密码不一致');
      this.setState({
        error:{
          password:true
        },
      })
      return
    }
    this.setState({
      email: email,
      password: pass,
      isLoading:true
    }, () => {
      this.send()
      .then((data) => {
        this.setState({
          disabled:true,
          isLoading:false,
        });
        dialog.success(data.msg)
        setTimeout(()=>{
          window.location.replace('/')
        },1500)
      })
      .fail((body) => {
        let data = body.responseJSON;
        dialog.error(data.msg)
        let origin = data.origin;
        let error = {}
        error[origin] = true;
        this.setState({
          error:error,
          disabled:false,
          isLoading:false
        })
      })
    });
  },
  render(){
    const emailGlyphicon = <Glyphicon glyph='envelope' />;
    const passGlyphicon = <Glyphicon glyph='eye-open' />;
    let isLoading = this.state.isLoading;
    let emailClasss = cset({
      'error': this.state.error.email,
    }, {
      'success': this.state.success.email
    });
    let passwordClasss = cset({
      'error': this.state.error.password
    }, {
      'success': this.state.success.password
    });
    return (
        <form className='form-horizontal' onSubmit={this.onHandleSubmit}>
          <fieldset>
            <legend>注册</legend>
            <Input type='email' label='邮箱' addonBefore={emailGlyphicon} labelClassName='col-lg-2' wrapperClassName='col-lg-5' placeholder="Enter email" ref="email" name="email" bsStyle={emailClasss} />
            <Input type='password' label='密码' addonBefore={passGlyphicon} labelClassName='col-lg-2' wrapperClassName='col-lg-5' placeholder="Enter password " ref="password" name="password" bsStyle={passwordClasss} />
            <Input type='password' label='确认密码' addonBefore={passGlyphicon} labelClassName='col-lg-2' wrapperClassName='col-lg-5' placeholder="Confirm password" ref="password_" name="password_" bsStyle={passwordClasss} />
            <div className="form-group">
              <Col lg={5} lgOffset={2}>
                <Button type="submit" bsStyle="info" disabled={isLoading} > {isLoading ? '注册中' : '注册'}</Button>
              </Col>
            </div>
          </fieldset>
        </form>
      )
  }
});
React.render(<Register />,document.getElementById('register'));