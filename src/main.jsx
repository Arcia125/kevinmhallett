var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./main.scss');

import Portfolio from './app/portfolio.jsx';

var anchor = document.getElementById('react-app-anchor');

ReactDOM.render(<Portfolio />, anchor);