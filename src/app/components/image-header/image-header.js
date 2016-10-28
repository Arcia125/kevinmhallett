import React from 'react';

const ImageHeader = (props) => {
    let imgUrl = props.imgSrc;
	let styleObj = {
		backgroundImage: 'url(' + imgUrl + ')'
	};
    let classes = props.className + ' image-header';
    return(
    	<header id={props.id} className={classes}>
        <div className='image-header_image' style={styleObj}>
        </div>
            {props.children}
    	</header>
    	);
}

export default ImageHeader;