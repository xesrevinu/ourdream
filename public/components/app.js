import React, { Component, PropTypes as Types } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button, Navbar, Nav, NavItem, DropdownButton, MenuItem, CollapsibleNav } from 'react-bootstrap'
import * as authActions from '../actions/authActions'

class App extends Component {
	static propTypes = {
		user: Types.object
	}
	static contextTypes = {
		router: Types.object.isRequired,
		store: Types.object.isRequired
	}
	static onEnter(nextState, transition) {
		console.log(1111)
	}
	static onLeave(){
		console.log(1)
	}
  render(){
    return (
      <div>
	      <Navbar brand={<Link to="/">Reactttttt </Link>}  toggleNavKey={0}>
		      <CollapsibleNav eventKey={0}>
			      <Nav navbar>
				      <li className="active">
					      <Link to="/">Link <span className="sr-only">(current)</span></Link>
				      </li>
				      <li>
				        <Link to="hello">hello</Link>
				      </li>
				      <DropdownButton eventKey={3} title='Dropdown'>
					      <MenuItem eventKey='1'>Action</MenuItem>
					      <MenuItem eventKey='2'>Another action</MenuItem>
					      <MenuItem eventKey='3'>Something else here</MenuItem>
					      <MenuItem divider />
					      <MenuItem eventKey='4'>Separated link</MenuItem>
				      </DropdownButton>
			      </Nav>
			      <Nav navbar right>
				      <li>
					      <Link to="login">登录</Link>
				      </li>
				      <li>
					      <Link to="register">注册</Link>
				      </li>
			      </Nav>
		      </CollapsibleNav>
	      </Navbar>
        {this.props.children}
      </div>
    )
  }
}

@connect(state=>({
	user:state.auth.user
}))
class AppContainer extends Component{
  static propTypes = {
	  user:Types.object,
    dispatch: Types.func.isRequired
  }
  render(){
    let { user, dispatch } = this.props
    return <App user={user} {...bindActionCreators( authActions, dispatch )} >
	    {this.props.children}
    </App>
  }
}
export default AppContainer

