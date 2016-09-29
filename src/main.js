var style = require('./main.scss');
var html = require('./index.html');
var React = require('react');
var ReactDOM = require('react-dom');
import Portfolio from './app/portfolio.js';
require('./google-analytics.js');

document.addEventListener('DOMContentLoaded', () => {
	var anchor = document.getElementById('app-anchor');
	ReactDOM.render(<Portfolio />, anchor);
});