import React from 'react'

export default React.createClass({
  onLogin(e){
    e.preventDefault();
    let email = React.findDOMNode(this.refs.email).value.trim()
    let password = React.findDOMNode(this.refs.password).value.trim()
    console.log(email,password)
    if (!email || !password) {
      return
    }
    $.ajax({
      type: 'POST',
      url: this.props.url,
      dataType: 'json',
      data: {
        email: email,
        password: password
      }
    }).then((data)=>{
      if(data.status==0){
        alert(data.error)
        return
      }
      setTimeout(()=>{
        location.replace('/');
      },1200)
    })
  },
  render(){
    return (
      <form className="form-horizontal" onSubmit={this.onLogin} url="/login">
        <fieldset>
          <legend>登录</legend>
          <div className="form-group">
              <label for="inputEmail" className="col-lg-2 control-label">邮箱</label>
              <div className="col-lg-5">
                  <input type="email" className="form-control" ref="email" name="email" placeholder="Email"></input>
              </div>
          </div>
          <div className="form-group">
            <label for="inputPassword" className="col-lg-2 control-label">密码</label>
            <div className="col-lg-5">
              <input type="password" className="form-control" ref="password" name="password" placeholder="Password"></input>
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
                <button type="submit" className="btn btn-primary">登录</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
});