var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var HomePage = require('HomePage');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path="/" component={Main}>
      <IndexRoute component={HomePage}/>
    </Router>
  </Router>, 
  document.getElementById('root')
);
