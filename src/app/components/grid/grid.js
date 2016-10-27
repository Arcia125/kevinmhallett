// grid.js
import React from 'react';

const Grid = (props) => {
	const classes = props.className + ' grid';
	return (
		<div className={classes}>
			{props.children}
		</div>
		);
}

export default Grid;