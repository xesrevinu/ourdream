/**
 * Created by xiaokekeT on 15/8/16.
 */
import React,{ Component, PropTypes as Types } from 'react'
import { Link } from 'react-router'
import Spinner from 'react-spinkit'
import { Modal, Input } from 'react-bootstrap'
import cx from 'classnames'


class LeftPanel extends Component{
	static propTypes = {
		show:Types.bool.isRequired,
		user:Types.object.isRequired
	}
	state = {
		showModal: false
	}
	close(){
		this.setState({
			showModal:false
		})
	}
	newMessage(){
		this.setState({
			showModal:true
		})
	}
	closeNewMessage(){
		// 是否保存
		alert('是否退出')
		this.close()
	}
	render(){
		let clasNames = cx({
			'left-menu animated': true,
			'none fadeOut': !this.props.show,
			'show fadeIn': this.props.show
		})
		return (
			<div className={clasNames}>
				<div className="menu-actions">
					<div className="menu-logo">
						<Link to="/"><i className="fa fa-connectdevelop fa-2x"> </i></Link>
					</div>
					<ul className="menu-list">
						<li>
							<a href='javascript:void(0)' onClick={this.newMessage.bind(this)}><i className="fa fa-edit fa-lg"></i></a>
							<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
								<Modal.Body>
									<Modal.Header>
										<Modal.Title>发布新消息</Modal.Title>
									</Modal.Header>
									<div>
										<button className="btn btn-info">发布</button>
										<button className="btn btn-warning">保存</button>
										<button className="btn btn-success">保存到草稿箱</button>
									</div>
									<div>
										<Input type="textarea" placeholder='textarea' />
									</div>
									<div>
										<div>
											<Input type='select' label='发布到:' placeholder='select'>
												{this.props.user.watchs.map((team, i)=>{
													return <option key={i} value={team.name}>{team.name}</option>
												})}
											</Input>
										</div>
									</div>
									<div>
										<label class="radio-inline">
											<Input type='radio' label='紧急' name="level" />
										</label>
										{ ' ' }
										<label class="radio-inline">
											<Input type='radio' label='普通' name="level" />
										</label>
										{ ' ' }
										<label class="radio-inline">
											<Input type='radio' label='日常' name="level" />
										</label>
									</div>
								</Modal.Body>
								<Modal.Footer>
									<button className="btn btn-success" onClick={this.closeNewMessage.bind(this)}>关闭</button>
								</Modal.Footer>
							</Modal>
						</li>
						<li>
							<Link to="/app" className="comment"><i className="fa fa-comment-o fa-lg"></i></Link>
						</li>
						<li>
							<Link to="/teams/me" className="users"><i className="fa fa-users fa-lg"></i></Link>
						</li>
						<li>
							<Link to="/inbox" className="inbox"><i className="fa fa-inbox fa-lg"></i></Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default LeftPanel
