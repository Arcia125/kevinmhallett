// page-text.js

var React = require('react');

class PageText extends React.Component {
	render() {
		let classes = this.props.className + ' page-text';
		return(
		<p className={classes}>
		{this.props.children}
		</p>
		);
	}
}
export default PageText;