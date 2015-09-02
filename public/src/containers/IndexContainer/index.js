/**
 * Created by xiaokekeT on 15/8/18.
 */
import React, { Component, PropTypes as Types } from 'react'
import { Link } from 'react-router'
import { Jumbotron, Button, Glyphicon, Row, Col, ListGroup, ListGroupItem, Modal} from 'react-bootstrap'

class Head extends Component{
	render(){
		return (
			<div className='masthead'>
				<h1 className="logo">Ourdream</h1>
				<p>最好的消息通知工具</p>
				<p>让您知道<strong>您</strong>的事</p>
				<p>
					<Link to="register" className="btn btn-primary">免费注册</Link>
				</p>
				<small>or</small> <Link to="login" className="btn btn-success">登录</Link>
				<a href="javascript:void(0)" className="show-down">
					<Glyphicon glyph="menu-down" bsSize="large"></Glyphicon>
				</a>
			</div>
		)
	}
}
class Announcement extends Component {
	static PropTypes = {
		cover:Types.string.isRequired,
		title:Types.string.isRequired
	}
	state = {
		showModal:false
	}
	open(){
		this.setState({
			showModal:true
		})
	}
	close(){
		this.setState({
			showModal:false
		})
	}
	render(){
		return (
			<div onClick={this.open.bind(this)}>
				<img src={this.props.cover} alt={this.props.title}/>
				<p>{this.props.title}</p>
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.props.children}
					</Modal.Body>
				</Modal>
			</div>
		)
	}
}
class Announcements extends Component{
	render() {
		return (
			<div className="announcements">
				<div className="container">
					<Row>
						<Col lg={4}>
							<div className="announcement about">
								<Announcement title={'啊哈哈'} cover={''}>
									在 Bootstrap 版本 3 中，通过为图片添加 .img-responsive 类可以让图片支持响应式布局。
									其实质是为图片设置了 max-width: 100%;、 height: auto; 和 display: block; 属性，从而让图片在其父元素中更好的缩放。
									如果需要让使用了 .img-responsive 类的图片水平居中，请使用 .center-block 类，不要用 .text-center。 请参考助手类章节 了解更多关于 .center-block
									的用法。
								</Announcement>
							</div>
						</Col>
						<Col lg={4}>
							<div className="announcement about">
								<Announcement title={'使用'} cover={''}>
									在 Bootstrap 版本 3 中，通过为图片添加 .img-responsive 类可以让图片支持响应式布局。
									其实质是为图片设置了 max-width: 100%;、 height: auto; 和 display: block; 属性，从而让图片在其父元素中更好的缩放。
									如果需要让使用了 .img-responsive 类的图片水平居中，请使用 .center-block 类，不要用 .text-center。 请参考助手类章节 了解更多关于 .center-block
									的用法。
								</Announcement>
							</div>
						</Col>
						<Col lg={4}>
							<div className="announcement about">
								<Announcement title={'呵呵'} cover={''}>
									在 Bootstrap 版本 3 中，通过为图片添加 .img-responsive 类可以让图片支持响应式布局。
									其实质是为图片设置了 max-width: 100%;、 height: auto; 和 display: block; 属性，从而让图片在其父元素中更好的缩放。
									如果需要让使用了 .img-responsive 类的图片水平居中，请使用 .center-block 类，不要用 .text-center。 请参考助手类章节 了解更多关于 .center-block
									的用法。
								</Announcement>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}
class Features extends Component{
	render(){
		return (
			<div>
				<div className="feature">
					<div className="container">
						<h3>我们在做什么?</h3>
						<p>自己的事自己最清楚，心中有数，面面俱到</p>
						<div className="introduction">
							<img src={''} className="img-responsive introduction-iphone" alt="app"/>
							<div className="introduction-list">
								<ListGroup>
									<ListGroupItem>1. 获取您各方面的通知（消息），并汇总，筛选呈现给您</ListGroupItem>
									<ListGroupItem>2. 公司，家庭，朋友，消息蜂拥而至，我们帮你通通搞定</ListGroupItem>
									<ListGroupItem>3. 发布通知，你、我、他, 都能第一时间知道</ListGroupItem>
									<ListGroupItem>...</ListGroupItem>
								</ListGroup>
							</div>
						</div>
					</div>
				</div>
				<div className="feature">
					<div className="container">
						<h3>自己掌握自己的时间</h3>
						<p>告别不知道，忘记了，种种尴尬....</p>
						<div className="introduction">
							<img src={''} className="img-responsive introduction-img" alt="app"/>
							<div className="introduction-list">
								<ListGroup>
									<ListGroupItem>1. 接受生活各方面的信息，并汇总到一起</ListGroupItem>
									<ListGroupItem>2. 安排时间，规划自己日常</ListGroupItem>
									<ListGroupItem>3. 发布通知，你、我、他, 都能第一时间知道</ListGroupItem>
									<ListGroupItem>...</ListGroupItem>
								</ListGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
class Footer extends Component {
	render(){
		return (
			<footer className="index-footer">
				<div className="copyright text-center">
					<div className="footer-logo">Ourdream</div>
					<div className="copyandlang">
						<p className="text">Copyright © 2013-2015 Ourdream<span className="vertical-dot">・</span></p>
					</div>
				</div>
			</footer>
		)
	}
}
class IndexContainer extends Component {
	static contextTypes = {
		router: Types.object
	}
	render() {
		return (
			<div>
				<div className='page'>
					<div className='container-fulid'>
						<Head />
						<Announcements />
						<Features />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
export default IndexContainer