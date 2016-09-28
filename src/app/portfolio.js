const React = require('react');
const $ = require('jquery');
const typed = require('typed.js');

import ImageHeader from './components/image-header/image-header';
import Section from './components/section/section';
import Title from './components/title/title';
import Grid from './components/grid/grid';
import Project from './components/project/project';

const headerImage = require('./../images/header.png');
const leaderboardImage = require('./../images/project-leaderboard.png');
const recipeBoxImage = require('./../images/project-recipe-box.png');
const simonImage = require('./../images/project-simon.png');
const tictactoeImage = require('./../images/project-tictactoe.png');
const calculatorImage = require('./../images/project-calculator.png');
const pomodoroImage = require('./../images/project-pomodoro-clock.png');

const projects = [
{
	name: 'Leaderboard',
	desc: 'Leaderboard of the top 100 students on www.freecodecamp.com using React.',
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
	name: 'Simon',
	desc: 'Simon game built with HTML5 Canvas.',
	href: 'https://arcia125.github.io/simon/dist/',
	img: simonImage,
	id: 3
},
{
	name: 'TicTacToe',
	desc: 'TicTacToe game using jQuery and Bootstrap.',
	href: 'https://arcia125.github.io/tictactoe/dist/',
	img: tictactoeImage,
	id: 4
},
{
	name: 'Calculator',
	desc: 'Javascript Calculator built using jQuery and Bootstrap',
	href: 'https://arcia125.github.io/calculator/dist/',
	img: calculatorImage,
	id: 5
},
{
	name: 'Pomodoro Clock',
	desc: 'Timer built using jQuery and jQuery-ui.',
	href: 'https://arcia125.github.io/pomodoro-clock/dist/',
	img: pomodoroImage,
	id: 6
}
];



class Portfolio extends React.Component {
	componentDidMount() {
		let header = "Hello, ^200 my name is Kevin Hallett.^250<br>I am a web developer.";
        $(".splash-title").typed({
            strings: [header],
            // typing speed
            typeSpeed: 40,
            // time before typing starts
            startDelay: 500,
            showCursor: false
        });
	}
	scrollToSection(section) {
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 500);
	}
	render() {
		return (
			<div className='app' >
				<ImageHeader imgSrc={headerImage} className='splash-header' >
					<div className='image-header_content' >
						<Title className='splash-title' ></Title>
					</div>
					<div className='header-scroll' >
                		<a onClick={() => this.scrollToSection('#about-me')} className='header-scroll_button' >
                    		<p>Learn more about me</p >
                    		<i className='fa fa-chevron-down' />
                		</a>
            		</div>
				</ImageHeader >

				<Section id='about-me' className='about-me-section'>
					<Title className='about-me-title' >About Me</Title>
					<p className='about-me-paragraph' >
						I am looking for work as a front end developer here in Austin, Texas. As a web developer, I am constantly looking
						to improve my knowledge about software engineering and the latest web
						technologies. I would like to get involved in projects where I can
						develop my skills as a programmer and make a meaningful contribution to a team.
					</p>
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