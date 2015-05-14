import React from 'react'
import dialog from '../dialog'

const loginUrl = '/login';

let login = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      subStatus:'登录',
      emailErr:false,
      passwordErr:false,
    };
  },
  send(){
    let email = this.refs.email.getDOMNode().value.trim(),
        pass = this.refs.password.getDOMNode().value.trim();
    if(!email){
      dialog.error('请输入email地址')
    }else if(!pass){
      dialog.error('请输入密码')
    }
    return $.ajax({
      type:'POST',
      url:loginUrl,
      data:{
        email:email,
        password:pass
      }
    })
  },
  onSubmit(e){
    e.preventDefault();
    this.setState({
      //disabled:true,
      subStatus:'登录中'
    });
    this.send().then((data)=>{
      this.setState({
        disabled:true,
        subStatus:'登录成功'
      });
      dialog.success(data.info)
      setTimeout(()=>{
        window.location.replace('/')
      },1500)
    }).fail((err)=>{
      let data =err.responseJSON;
      dialog.error(data.info)
      let origin =data.origin+'Err'
      this.setState({
        origin:true
      })
      this.setState({
        disabled:false,
        subStatus:'登录',
      })
    })
  },
  render(){
    return (
      <form className="form-horizontal" onSubmit={this.onSubmit}>
        <fieldset>
          <legend>登录</legend>
          <div className="form-group { this.state.emailErr ? 'has-error' :''}">
              <label for="inputEmail" className="col-lg-2 control-label">邮箱</label>
              <div className="col-lg-5">
                <div className="input-group">
                  <span className="input-group-addon">@</span>
                  <input type="email" className="form-control" readonly={this.state.disabled} ref="email" name="email" placeholder="Email"></input>
                </div>
              </div>
          </div>
          <div className="form-group { this.state.passwordErr ? 'has-error' :''}">
            <label for="inputPassword" className="col-lg-2 control-label">密码</label>
            <div className="col-lg-5">
              <input type="password" className="form-control" readonly={this.state.disabled} ref="password" name="password" placeholder="Password"></input>
              <br />
              <div className="togglebutton">
                <label>
                  <input type="checkbox" checked> 保持登录</input>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-5 col-lg-offset-2">
                <button type="submit" className="btn btn-primary" disabled={this.state.disabled}>{this.state.subStatus}</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
});

React.render(React.createElement(login),document.getElementById('login'));