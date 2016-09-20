var React = require('react');
var $ = require('jquery');
var typed = require('typed.js');
import TextConsole from './../text-console/text-console';

var consoleInputs = [
"var React = require('react');",
"var $ = require('jquery');",
"var typed = require('typed.js');",
"import TextConsole from './../text-console/text-console';"
];

class AnimatedHeader extends React.Component {
	render() {
		let classes = this.props.className + ' animated-header';
		let randInput = consoleInputs[Math.floor((Math.random() * consoleInputs.length) + 1)];
		var consoleText = randInput;
		return(
		<div className={classes} >
			<div className='animated-header-console' >
			<TextConsole consoleText={consoleText} className='animated-text'/>
			</div>

			<header className='header'>
				{this.props.children}
			</header>
		</div>
		);
	}
}
export default AnimatedHeader;