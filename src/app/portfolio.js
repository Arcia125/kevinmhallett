var React = require('react');
var $ = require('jquery');
var typed = require('typed.js');

import ImageHeader from './components/image-header/image-header';
import Section from './components/section/section';
import Title from './components/title/title';
import PageText from './components/page-text/page-text';
import Grid from './components/grid/grid';
import Project from './components/project/project';

var headerImage = require('./../images/header.png');
var projectImage = require('./../images/project-placeholder.png');
var leaderboardImage = require('./../images/project-leaderboard.png');
var recipeBoxImage = require('./../images/project-recipe-box.png');


class Portfolio extends React.Component {
	componentDidMount() {
		let header = "Hello, ^200 my name is Kevin Hallett.^250<br>I am a web developer.";
        $(".splash-title").typed({
            strings: [header],
            // typing speed
            typeSpeed: 40,
            // time before typing starts
            startDelay: 500,
            showCursor: false,
        });
	}
	render() {
		let projects = [
		{
			name: 'FreeCodeCamp Leaderboard',
			desc: 'Leadboard of the top 100 students on www.freecodecamp.com using React.',
			href: 'https://arcia125.github.io/freecodecamp-leaderboard/dist/',
			img: leaderboardImage,
			id: 1,
		},
		{
			name: 'Recipe Box App',
			desc: 'Recipe box web application using React.',
			href: 'https://arcia125.github.io/recipe-box/dist/',
			img: recipeBoxImage,
			id: 2
		},
		{
			name: 'test', desc: 'lorem ipsum', img: projectImage, id: 3
		},
		{
			name: 'test', desc: 'lorem ipsum', img: projectImage, id: 4
		},
		{
			name: 'test', desc: 'lorem ipsum', img: projectImage, id: 5
		},
		{
			name: 'test', desc: 'lorem ipsum', img: projectImage, id: 6
		}
		];
		return (
			<div className='app' >

				<ImageHeader imgSrc={headerImage} className='splash-header' >
					<Title className='splash-title' ></Title>
				</ImageHeader >
				<Section className='about-me-section'>
					<Title className='about-me-title' >About Me</Title>
					<PageText className='about-me-paragraph' >
						I am looking for work as a front end developer here in Austin, Texas. As a web developer, I am constantly looking
						to improve my knowledge about software engineering and the latest web
						technologies. I would like to get involved in projects where I can
						develop my skills as a programmer and make a meaningful contribution to a team.
					</PageText>
				</Section>
				<Section className='portfolio-section' >
					<Title className='portfolio-title' >Recent Projects</Title>
					<Grid className='portfolio-grid' >
						{projects.map((project) => {
							return(
								<Project
									imgSrc={project.img}
									projectName={project.name}
									desc={project.desc}
									key={project.id}
									href={project.href}
									className='project-item'
								/>
								);
							})}
					</Grid>
				</Section>

			</div>
			);
	}
}

export default Portfolio;