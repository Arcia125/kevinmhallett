// grid.js

var React = require('react');

class Grid extends React.Component {
	render() {
		let classes = this.props.className + ' grid';
		return(
		<div className={classes}>
		{this.props.children}
		</div>
		);
	}
}
export default Grid;