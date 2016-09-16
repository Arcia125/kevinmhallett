var React = require('react');
var imgUrl = require('./../../images/javascript2.png');

class ImageHeader extends React.Component {
    render() {
    	let styleObj = {
    		backgroundImage: 'url(' + imgUrl + ')'
    	};
        return(
        	<header className='image-header' style={styleObj}>
        	<h1 className='image-header_title' >Kevin Hallett</h1>
        	<h2 className='image-header_subtitle' >Front End Developer</h2>
        	</header>
        	);
    }
}

export default ImageHeader;

