var React = require('react');
var imgUrl = require('./../../../images/header.png');


class ImageHeader extends React.Component {
    render() {
    	let styleObj = {
    		backgroundImage: 'url(' + imgUrl + ')'
    	};
        return(
        	<header className='image-header'>
            <div className='image-header_image' style={styleObj}>
            </div>
            <div className='image-header_content' >
        	   <h1 className='image-header_title' >Kevin Hallett</h1>
        	   <h2 className='image-header_subtitle' >Front End Developer</h2>
               </div>
        	</header>
        	);
    }
}

export default ImageHeader;