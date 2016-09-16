var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./main.scss');

import Portfolio from './app/portfolio.js';

document.addEventListener('DOMContentLoaded', () => {
	var anchor = document.getElementById('app-anchor');
	ReactDOM.render(<Portfolio />, anchor);
});