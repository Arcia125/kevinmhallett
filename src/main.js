require('./main.scss');
require('./index.html');
import React from 'react';
import ReactDOM from 'react-dom';

require('./google-analytics.js');
import Portfolio from './app/portfolio.js';

const initApp = function initApp() {
	const anchor = document.getElementById('app-anchor');
	ReactDOM.render(<Portfolio />, anchor);
	document.removeEventListener('DOMContentLoaded', initApp);
}

document.addEventListener('DOMContentLoaded', initApp);