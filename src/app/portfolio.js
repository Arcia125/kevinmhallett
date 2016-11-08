import React from 'react';

const $ = require('jquery');
const typed = require('typed.js');

import ImageHeader from './components/image-header/image-header';
import Section from './components/section/section';
import Grid from './components/grid/grid';
import Project from './components/project/project';

const headerImage = require('./../images/header.png');
const recipeBoxImage = require('./../images/project-recipe-box.png');
const simonImage = require('./../images/project-simon.png');
const tictactoeImage = require('./../images/project-tictactoe.png');
const calculatorImage = require('./../images/project-calculator.png');
const lifeImage = require('./../images/project-life.png');
const kevinImage = require('./../images/kevin.jpg');
const roguelikeImage = require('./../images/project-roguelike.png');

const projects = [
{
	name: 'React Roguelike RPG',
	desc: 'Roguelike dungeon crawler game utilizing React and Redux.',
	liveLink: 'https://arcia125.github.io/roguelike/dist/',
	codeLink: 'https://github.com/Arcia125/roguelike',
	img: roguelikeImage,
	longDesc: 'I built this project using React and Redux. It is a roguelike game complete with procedural level generation. The player is tasked with reaching the fourth level of the dungeon and slaying the boss. The screen is constructed out of span elements styled with flexbox to form a grid. Each individual span element gets a class that determines its color on the screen. The class that is fed to it depends on the value of its index in the board part of the Redux store. The code is easilly modifiable to change the way the level is generated.',
	id: 1,
},
{
	name: 'Game of Life',
	desc: 'John Conway\'s game of life built with React.',
	liveLink: 'https://arcia125.github.io/game-of-life/dist/',
	codeLink: 'https://github.com/Arcia125/game-of-life',
	img: lifeImage,
	longDesc: 'I built this project using React. It is replica of John Conway\'s Game of Life. It begins with a random base state and then generates new generations based on a basic set of rules. The cells each can have the states "dead"(black) or "alive"(green). If a living cell has four or more neighbors it dies of overcrowding. If a living cell has less than two neighbors it will die of loneliness. In all other cases the living cells will continue to be alive in the next generation. The dead cells will be replaced by a new living cell if they have exactly 3 living neighbor cells.' ,
	id: 2,
},
{
	name: 'Recipe Box App',
	desc: 'Recipe box web application using React.',
	liveLink: 'https://arcia125.github.io/recipe-box/dist/',
	codeLink: 'https://github.com/Arcia125/recipe-box',
	img: recipeBoxImage,
	longDesc: 'I built this project using React. It is a web app that allows the user to create, edit, or delete recipes. The recipes will be saved using the browser\'s local storage which allows the user to leave the page without losing their recipes.',
	id: 3
},
{
	name: 'Simon',
	desc: 'Simon game built with HTML5 Canvas.',
	liveLink: 'https://arcia125.github.io/simon/dist/',
	codeLink: 'https://github.com/Arcia125/simon',
	img: simonImage,
	longDesc: 'I built this project using HTML, CSS, and JavaScript. I used the HTML5 Canvas to draw the game. The user can play the classic game of Simon. There is a strict mode which decides what occurs whenever the user makes a mistake while playing their turn. If strict mode is on the player loses if they make a mistake; otherwise the round will start over.',
	id: 4
},
{
	name: 'TicTacToe',
	desc: 'TicTacToe game using jQuery and Bootstrap.',
	liveLink: 'https://arcia125.github.io/tictactoe/dist/',
	codeLink: 'https://github.com/Arcia125/tictactoe',
	img: tictactoeImage,
	longDesc: 'A simple game of TicTacToe. This project makes use of the jQuery and Bootstrap frameworks. The player picks "Xs" or "Os" and then plays against the AI.',
	id: 5
},
{
	name: 'Calculator',
	desc: 'Javascript Calculator built using jQuery and Bootstrap',
	liveLink: 'https://arcia125.github.io/calculator/dist/',
	codeLink: 'https://github.com/Arcia125/calculator',
	img: calculatorImage,
	longDesc: 'A calculator web app that includes the jQuery and Bootstrap frameworks.',
	id: 6
},
];



class Portfolio extends React.Component {
	componentDidMount() {
		const header = "Hello, ^150 my name is Kevin Hallett.^200<br>I am a web developer.";
		this.initiateTyped(header);
		this.toggleNavClass();
	}

	initiateTyped(header) {
		$(".splash-title").typed({
            strings: [header],
            // typing speed
            typeSpeed: 26,
            // time before typing starts
            startDelay: 500,
            showCursor: false
        });
	}

	toggleNavClass() {
        const breakPoint = $('#about-me');
		const navbar = $('#react-nav');
        $(document).scroll(function() {
	        const offset = breakPoint.offset().top - navbar.height();
        	const scrollStart = window.pageYOffset;
        	if(scrollStart > offset) {
        		navbar.addClass('solid-bg');
        	}else {
        		navbar.removeClass('solid-bg');
        	}
        })
	}

	createProjects(projectArray) {
		return projectArray.map((project) => {
			return(
				<Project
					imgSrc={project.img}
					projectName={project.name}
					desc={project.desc}
					key={project.id}
					liveLink={project.liveLink}
					codeLink={project.codeLink}
					className='project'
				/>
			)
		});
	}

	scrollToSection(section) {
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, 500);
	}
	render() {
		return (
			<div id='home' className='app' >

				<nav id='react-nav' className='react-nav' >
					<div role='navigation' className='react-nav_link' >
						<a onClick={() => this.scrollToSection('html, body')}>
						Home
						</a>
					</div>
					<div role='navigation' className='react-nav_link' >
						<a onClick={() => this.scrollToSection('#about-me')}>
						About
						</a>
					</div>
					<div role='navigation' className='react-nav_link' >
						<a onClick={() => this.scrollToSection('#projects')}>
						Projects
						</a>
					</div>
				</nav>

				<ImageHeader id='image-header' imgSrc={headerImage} className='splash-header' >
					<div className='image-header_content' >
						<h1 className='splash-title' ></h1>
					</div>
				</ImageHeader >

				<div className='header-scroll' >
            		<a onClick={() => this.scrollToSection('#about-me')} className='header-scroll_button' >
						<div className='header-scroll-content'>
	                		<p>Learn more about me</p >
	                		<i className='fa fa-chevron-down' />
	                	</div>
            		</a>
        		</div>

				<Section id='about-me' className='about-me-section'>
					<h1 className='about-me-title' >About Me</h1>
					<img src={kevinImage} alt className='self-image' />
					<p className='about-me-paragraph' >
						I am a self-taught web developer with a focus on front end development.I began my learning journey in programming whenever I was in high school with classes in computer science, web design, and digital graphics. These classes sparked my interest in software development by exposing me to HTML, Photoshop, Illustrator, Dreamweaver, and JavaScript. 
					</p>
					<p className='about-me-paragraph' >
						Once I graduated I experimented with languages such as Java and Python before taking college classes in both languages at Arizona State University online. While I was attending college, I became very interested in web development and began to complete the curriculum at www.FreeCodeCamp.com where I recently finished my certification in Front End Development. More recently I have begun to dive into modern web technologies such as React.js and webpack.
					</p>
					<p className='about-me-paragraph' >
						I am looking for a team that shares my excitement for pushing the limits of what is currently possible in web development. If this sounds like your organization, I would be glad to discuss any employment opportunities with you.
					</p>
				</Section>

				<Section id='projects' className='portfolio-section' >
					<h1 className='portfolio-title' >Recent Projects</h1>
					<Grid className='portfolio-grid' >
						{this.createProjects(projects)}
					</Grid>
				</Section>

				<div className='footer'>
					<h1 className='footer-contact-header'>Contact</h1>
					<span className='footer-contact-line'/>
					<div className='footer-contact-icon-container'>
						<a className='footer-contact-icon' href='https://github.com/Arcia125' target='_blank' >
	                    	<div className='icon-container'><i className='fa fa-github fa-2x' /></div>
	                	</a>
	                	<a className='footer-contact-icon' href='https://www.linkedin.com/in/kevinmhallett' target='_blank' >
	                    	<div className='icon-container'><i className='fa fa-linkedin fa-2x' /></div>
	                	</a>
	                	<a className='footer-contact-icon' href='mailto:contact@kevinmhallett.com' >
	                    	<div className='icon-container'><i className='fa fa-envelope fa-2x' /></div>
	                	</a>
	                </div>
				</div>

			</div>
			);
	}
}

export default Portfolio;