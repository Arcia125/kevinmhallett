var React = require('react');
import AnimatedHeader from './components/animated-header/animated-header';
import ImageHeader from './components/image-header/image-header';
import Section from './components/section/section';
import Title from './components/title/title';
import Subtitle from './components/subtitle/subtitle';
import PageText from './components/page-text/page-text';

var headerImage = require('./../images/header.png');

class Portfolio extends React.Component {
	render() {
		return (
			<div className='app' >

				<AnimatedHeader className='splash-header' >
					<Title className='splash-title' >Hello, my name is Kevin Hallett and I am a web developer.</Title>
					
				</AnimatedHeader >
				<Section className='about-me-section'>
					<Title className='about-me' >About Me</Title>
					<PageText className='about-me-paragraph' >
						I am looking for work as a front end developer here in Austin, Texas. As a web developer, I am constantly looking
						to improve my knowledge about software engineering and the latest web
						technologies. I would like to get involved in projects where I can
						develop my skills as a programmer and make a meaningful contribution to a team.
					</PageText>
				</Section>

			</div>
			);
	}
}

export default Portfolio;