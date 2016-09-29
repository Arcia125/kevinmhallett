var React = require('react');

class ImageHeader extends React.Component {
    render() {
        let imgUrl = this.props.imgSrc;
    	let styleObj = {
    		backgroundImage: 'url(' + imgUrl + ')'
    	};
        let classes = this.props.className + ' image-header';
        return(
        	<header id={this.props.id} className={classes}>
            <div className='image-header_image' style={styleObj}>
            </div>
                {this.props.children}
        	</header>
        	);
    }
}

export default ImageHeader;