import React from 'react';

const Section = props => {
    let classes = props.className + ' page-section';
    return(
    	<section id={props.id} className={classes}>
            <div className='page-section-content' >
                {props.children}
            </div>
        </section>
    	);
}

export default Section;