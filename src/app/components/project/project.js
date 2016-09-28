
var React = require('react');

class Project extends React.Component {
	render() {
		return(
		<div className='project' >
			<a href={this.props.href} className='project-link' >
				<img src={this.props.imgSrc} alt className='project-image' />
			</a>
			<div className='project-text' >
				<h1 className='project-title' >{this.props.projectName}</h1>
				<p className='project-desc' >{this.props.desc}</p>
			</div>
		</div>
		);
	}
}
export default Project;