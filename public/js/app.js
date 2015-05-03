var React = require('react');
var AppComponent = require('./AppComponent.js');

if(document.getElementById('hi')) {
    React.render(<AppComponent/>, document.getElementById('hi'));
}
console.log('Loaded the app component');