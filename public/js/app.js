import React from 'react'
import AppComponent from './AppComponent'
import loginComponent from './loginComponent'

const selfUrl = window.location.pathname;
const reactList = {
  '/': [{
    'hi': < AppComponent />
  }],
  '/login': [{
    'login': < loginComponent /> , // < AppComponent />
  }]
}

if (reactList[selfUrl]) {
  const components = reactList[selfUrl]
  for (let i = 0; i < components.length; i++) {
    for (let k in components[i]) {
      let ele = document.getElementById(k)
      if (ele) {
        let component = components[i][k]
        React.render(component, ele)
      }
    }
  }
}