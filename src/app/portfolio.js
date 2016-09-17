var React = require('react');
import ImageHeader from './components/image-header/image-header';
import Section from './components/section/section';

class Portfolio extends React.Component {
	render() {
		let aboutMe = 'My name is Kevin Hallett. I am an aspiring \
		front-end developer in Austin, Texas. I am constantly looking \
		to improve my knowledge about software engineering and web \
		development. I want to get involved in projects where I can \
		develop my skills and make a meaningful contribution to a team.';
		return (
			<div className='app'>
			<ImageHeader />
			<Section header='About' sectionText={aboutMe} />
			</div>
			);
	}
}

export default Portfolio;