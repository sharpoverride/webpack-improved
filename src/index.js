"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var react_router_1 = require('react-router');
var sample_1 = require('./sample');
var mountNode = document.querySelector('#app');
ReactDOM.render(React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: sample_1.Layout}, React.createElement(react_router_1.IndexRoute, {component: sample_1.EntryPage}))), mountNode);
//# sourceMappingURL=index.js.map