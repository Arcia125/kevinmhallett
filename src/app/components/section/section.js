var React = require('react');

class Section extends React.Component {
    render() {
        let classes = this.props.className + ' page-section';
        return(
        	<div className={classes}>
            <div className='page-section-content' >
            {this.props.children}
            </div>
            </div>
        	);
    }
}

export default Section;