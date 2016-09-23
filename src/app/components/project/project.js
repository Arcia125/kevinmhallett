
var React = require('react');

class Project extends React.Component {
	render() {
		let classes = this.props.className + ' project';
		return(
		<div className={classes} >
			<a href={this.props.href} className='project-link' >
				<img src={this.props.imgSrc} alt className='project-image' />
			</a>
			<h1 className='project-title' >{this.props.projectName}</h1>
			<p className='project-desc' >{this.props.desc}</p>
		</div>
		);
	}
}
export default Project;