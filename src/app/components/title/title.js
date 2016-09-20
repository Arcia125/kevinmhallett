// title.js

var React = require('react');

class Title extends React.Component {
	render() {
		let classes = this.props.className + ' react-title';
		return(
		<h1 className={classes}>
		{this.props.children}
		</h1>
		);
	}
}
export default Title;