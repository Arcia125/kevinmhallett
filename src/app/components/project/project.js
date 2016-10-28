
import React from 'react';

const Project = (props) => {
	return(
	<div className='project' >
		<a href={props.href} className='project-link' target='_blank'>
			<img src={props.imgSrc} alt className='project-image' />
		<div className='project-text' >
			<h1 className='project-title' >{props.projectName}</h1>
			<p className='project-desc' >{props.desc}</p>
			<i className='fa fa-github fa-2x'/>
		</div>
		</a>
	</div>
	);
}
export default Project;