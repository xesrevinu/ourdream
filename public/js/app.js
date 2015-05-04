import React from 'react'
import AppComponent from './AppComponent'
import LoginComponent from './LoginComponent'
const selfUrl = window.location.pathname;
const reactList = {
  '/': [{
    'hi': AppComponent
  }],
  '/login': [{
    'login': LoginComponent
  }]
}

if (reactList[selfUrl]) {
  const components = reactList[selfUrl]
  for (let i = 0; i < components.length; i++) {
    for (let k in components[i]) {
      let ele = document.getElementById(k)
      if (ele) {
        let component = components[i][k]
        React.render(React.createElement(component), ele)
      }
    }
  }
}