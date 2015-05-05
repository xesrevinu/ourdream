import React from 'react'
import appComponent from './appComponent'
import loginComponent from './loginComponent'
import registerComponent from './registerComponent'
const selfUrl = window.location.pathname;

require('test.scss')
require('base.scss')

const reactList = {
  '/': [{
    'hi': appComponent
  }],
  '/login': [{
    'login': loginComponent
  }],
  '/register': [{
    'register': registerComponent
  }]
}

if (reactList[selfUrl]) {
  const components = reactList[selfUrl]
  for (let i = 0; i < components.length; i++) {
    for (let k in components[i]) {
      let ele = document.getElementById(k)
      if (ele) {
        let component = components[i][k]
        setTimeout(() => {
          React.render(React.createElement(component), ele)
        }, 1000)
      }
    }
  }
}