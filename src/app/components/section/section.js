var React = require('react');

class Section extends React.Component {
    render() {
        let header = this.props.header;
        let text = this.props.sectionText;
        return(
        	<div className='page-section'>
            <div className='page-section-content' >
            <h1 className='page-header' >
            {header}
            </h1>
            <p className='page-text' >
            {text}
            </p>
            </div>
            </div>
        	);
    }
}

export default Section;