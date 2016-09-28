var React = require('react');

class Section extends React.Component {
    render() {
        let classes = this.props.className + ' page-section';
        return(
        	<section id={this.props.id} className={classes}>
            <div className='page-section-content' >
            {this.props.children}
            </div>
            </section>
        	);
    }
}

export default Section;