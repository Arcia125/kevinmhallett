// text-console.js

var React = require('react');

class TextConsole extends React.Component {
	render() {
		let classes = this.props.className + ' text-console';
		let innerText = this.props.consoleText;
		return(
		<div className={classes}>
		<p>{innerText}</p>
		</div>
		);
	}
}
export default TextConsole;