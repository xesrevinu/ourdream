/**
 * Created by xiaokekeT on 15/8/12.
 */
import React, { Component, PropTypes as Types } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Panel } from 'react-bootstrap'
import * as MessageActions from '../../actions/messageActions'
import Spinner from 'react-spinkit'

class Message extends Component {
	static propTypes = {
		data:Types.array
	}
	render(){
		let item = []
		this.props.data.map((a, b)=> {
			var team = (
				<div className="media message-item animated fadeIn" key={'message-'+b}>
					<div className="media-left">
						<a href="#">
							<img className="media-object" src="" />
						</a>
					</div>
					<div className="media-body">
						<span className="media-heading">{a.name}</span>
						<ul>
							{a.messages.length>0 ? a.messages.map((c)=>{
								return (
									<li>{c.content} ---- {moment(c.createdAt).format('lll')}</li>
								)
							}) : ''}
						</ul>
						<p>{a.content}</p>
					</div>
				</div>
			)
			item.push(team)
		})
		return (
			<div>
				{item}
			</div>
		)
	}
}

class MessageList extends Component {
	static propTypes = {
		message:Types.object.isRequired
	}
	render() {
		let teamLen = this.props.message.data.length || 0
		let messageLen = 0
		let atMe = 0
		this.props.message.data.map((k,v)=>{
			return k.messages
		}).map((k)=>{
			messageLen+=k.length
		})
		return (
			<div>
				{this.props.message.isLoading ? <Spinner spinnerName="wave" className="message-loading" /> : this.props.message.error ? '加载失败，请尝试重新刷新页面' : (
					<div>
						<Panel>
							<i className="fa fa-info fa-lg"></i> 共有{teamLen}个团队的<i>{messageLen}</i>条新消息 { atMe > 0 ? atMe + '条于我有关' : '' }
						</Panel>
						<Message data={this.props.message.data} />
					</div>
				)}
			</div>
		)
	}
}

@connect(state=>({
	message:state.message,
	user:state.auth.user
}))
class MessageContainer extends Component {
	static propTypes = {
		message:Types.object.isRequired
	}
	componentDidMount(){
		let { dispatch } = this.props
		this.messageActions=bindActionCreators(MessageActions, dispatch)
		this.messageActions.load(this.props.user._id)
	}
	render(){
		return (
			<div className="col-md-8  message-container">
				<MessageList message={this.props.message} />
			</div>
		)
	}
}
export { Message }
export default MessageContainer
