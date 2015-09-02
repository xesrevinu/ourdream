/**
 * Created by xiaokekeT on 15/8/11.
 */
import React,{ Component, PropTypes as Types } from 'react'
import { Link } from 'react-router'
import { Button, Navbar, Nav, NavItem, DropdownButton, MenuItem, CollapsibleNav, Glyphicon } from 'react-bootstrap'
import Spinner from 'react-spinkit'

class Header extends Component{
	static propTypes = {
		auth:Types.object.isRequired,
		authActions:Types.object.isRequired,
		router:Types.object.isRequired,
		toggleftMenu:Types.func.isRequired
	}
	logout(){
		this.props.authActions.logout(this.props.router)
	}
	render(){
		let { auth:{ isLoading, user } } = this.props
		let userInfo = (
			<span>
				<span style={{padding: "0 10px 0 10px"}}> {user.name || '小白' } </span>
				<img style={{width:'42px',height:'42px'}} className="img-circle" src="https://unsplash.it/40/40" alt=""/>
			</span>
		)
		let userAction = (
			<Nav navbar right eventKey={0}> {/* This is the eventKey refer/enced */}
				<NavItem eventKey={1} href='javascript:void(0)' style={{padding: "3px"}}><i className="fa fa-bell-o"></i></NavItem>
				<DropdownButton style={{padding: "5px 0 5px 0"}} eventKey={3} title={userInfo}>
					<MenuItem eventKey='1'>Action</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey='2' onClick={this.logout.bind(this)}>退出</MenuItem>
				</DropdownButton>
			</Nav>
		)
		let loading = (
			<Nav navbar right>
				<li>
					<span href="javascript:void(0)" >
						<Spinner spinnerName='chasing-dots' className="loading"  style={{height: "20px",marginTop: "6px"}}/>
					</span>
				</li>
			</Nav>
		)
		return (
			<div>
				<Navbar fluid brand={<i onClick={this.props.toggleftMenu} className="fa fa-bars"></i>} toggleNavKey={0}>
					<CollapsibleNav eventKey={0}>
						{isLoading ? loading : userAction}
					</CollapsibleNav>
				</Navbar>
			</div>
		)
	}
}
export default  Header
