import React, {Component, PropTypes as Types} from 'react'

class Content extends Component{
  render(){
    return (
      <div className="container-fulid">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Content
