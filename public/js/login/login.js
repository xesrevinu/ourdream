import React from 'react'
import dialog from '../dialog'
import cset from 'classnames/dedupe'
import {
  Input,
  Glyphicon,
  Button,
  Col
} from 'react-bootstrap'
const loginUrl = '/login';

let Login = React.createClass({
  getInitialState() {
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
    };
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
      url:loginUrl,
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
        remember = this.refs.remember.getChecked();
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
    }
    this.setState({
      email: email,
      password: pass,
      remember: remember,
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
  render() {
    const emailGlyphicon = <Glyphicon glyph='envelope' />;
    const passGlyphicon = <Glyphicon glyph='eye-open' />;
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
    let isLoading = this.state.isLoading;
    return (
       <form className='form-horizontal' onSubmit={!isLoading ? this.onHandleSubmit : null}>
          <fieldset>
            <legend>登录</legend>
            <Input type='email' label='邮箱' addonBefore={emailGlyphicon} labelClassName='col-lg-2' wrapperClassName='col-lg-5' placeholder="Enter email" name="email" ref="email" bsStyle={emailClasss} />
            <Input type='password' label='密码' addonBefore={passGlyphicon} labelClassName='col-lg-2' wrapperClassName='col-lg-5' placeholder="Enter password " name="password" ref="password" bsStyle={passwordClasss}/>
            <div className="form-group">
              <Col xs={6} lgOffset={2}>
                <div className="checkbox checkbox-primary">
                    <label>
                      <Input type="checkbox" label=" 记住登录" help='' name="remember" ref="remember" ><span className="checkbox-material"><span className="check"></span></span>
                      </ Input>
                    </label>
                </div>
              </Col>
            </div>
            <div className="form-group">
              <Col lg={5} lgOffset={2}>
                <Button type="submit" bsStyle="info" disabled={isLoading} > {isLoading ? '登录中' : '登录'}</Button>
              </Col>
            </div>
          </fieldset>
        </form>
    );
  }
});

React.render(<Login />,document.getElementById('login'));