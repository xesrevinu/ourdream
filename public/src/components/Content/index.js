require('./stylus/content.styl')
import React, {Component, PropTypes as Types} from 'react'

class Content extends Component{
  render(){
    return (
      <div className="container-fulid content">
	      {this.props.children}
      </div>
    )
  }
}

export default Content
