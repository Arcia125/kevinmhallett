
import React from 'react';

const Project = (props) => {
	return(
	<div className='project' >
		<img src={props.imgSrc} alt className='project-image' />
		<div className='project-slider'>
		<div className='project-text' >
			<h1 className='project-title' >{props.projectName}</h1>
			<p className='project-desc' >{props.desc}</p>
		</div>
		<div className='project-button-container'>
				<a href={props.liveLink} className='project-live-link' target='_blank' >
					View Project
				</a>
				<a href={props.codeLink} className='project-code-link' target='_blank' >
					<i className='fa fa-github fa-2x'/>
				</a>
			</div>
		</div>
	</div>
	);
}
export default Project;