var React = require('react');

class ImageHeader extends React.Component {
    render() {
        let imgUrl = this.props.imgSrc;
    	let styleObj = {
    		backgroundImage: 'url(' + imgUrl + ')'
    	};
        let classes = this.props.className + ' image-header';
        return(
        	<header className={classes}>
            <div className='image-header_image' style={styleObj}>
            </div>
            <div className='image-header_content' >
            {this.props.children}
               </div>
        	</header>
        	);
    }
}

export default ImageHeader;