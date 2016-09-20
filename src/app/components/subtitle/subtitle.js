// subtitle.js

var React = require('react');

class Subtitle extends React.Component {
	render() {
		let classes = 'react-subtitle ' + this.props.className;
		return(
		<h2 className={classes}>
		{this.props.children}
		</h2>
		);
	}
}
export default Subtitle;