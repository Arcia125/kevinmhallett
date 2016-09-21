// project.js

/*<div key={project.id}className='portfolio-item' >
									<img src={project.img} alt className='portfolio-image' />
									<h1>{project.name}</h1>
									<p>{project.desc}</p>
								</div>*/

var React = require('react');

class Project extends React.Component {
	render() {
		let classes = this.props.className + ' project';
		return(
		<div className={classes} >
			<img src={this.props.imgSrc} alt className='project-image' />
			<h1 className='project-title' >{this.props.projectName}</h1>
			<p className='project-desc' >{this.props.desc}</p>
		</div>
		);
	}
}
export default Project;