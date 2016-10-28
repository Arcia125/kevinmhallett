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
	name: 'Roguelike Dungeon Crawler',
	desc: 'Roguelike dungeon crawler game utilizing React and Redux.',
	href: 'https://arcia125.github.io/roguelike/dist/',
	img: roguelikeImage,
	id: 1,
},
{
	name: 'Game of Life',
	desc: 'John Conway\'s game of life built with React.',
	href: 'https://arcia125.github.io/game-of-life/dist/',
	img: lifeImage,
	id: 2,
},
{
	name: 'Recipe Box App',
	desc: 'Recipe box web application using React.',
	href: 'https://arcia125.github.io/recipe-box/dist/',
	img: recipeBoxImage,
	id: 3
},
{
	name: 'Simon',
	desc: 'Simon game built with HTML5 Canvas.',
	href: 'https://arcia125.github.io/simon/dist/',
	img: simonImage,
	id: 4
},
{
	name: 'TicTacToe',
	desc: 'TicTacToe game using jQuery and Bootstrap.',
	href: 'https://arcia125.github.io/tictactoe/dist/',
	img: tictactoeImage,
	id: 5
},
{
	name: 'Calculator',
	desc: 'Javascript Calculator built using jQuery and Bootstrap',
	href: 'https://arcia125.github.io/calculator/dist/',
	img: calculatorImage,
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
        const offset = breakPoint.offset().top + (breakPoint.height() * .8);
		const navbar = $('#react-nav');
        $(document).scroll(function() {
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
					href={project.href}
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
                    		<p>Learn more about me</p >
                    		<i className='fa fa-chevron-down' />
                		</a>
            		</div>

				<Section id='about-me' className='about-me-section'>
					<h1 className='about-me-title' >About Me</h1>
					<img src={kevinImage} alt className='self-image' />
					<p className='about-me-paragraph' >
						I am a self-taught web developer with a focus on front end development.I began my learning journey in programming whenever I was in high school with classes in computer science, web design, and digital graphics. These classes sparked my interest in software development by exposing me to HTML, Photoshop, Illustrator, Dreamweaver, and JavaScript. 

Once I graduated I experimented with languages such as Java and Python before taking college classes in both languages at Arizona State University online. While I was attending college, I became very interested in web development and began to complete the curriculum at www.FreeCodeCamp.com where I recently finished my certification in Front End Development. More recently I have begun to dive into modern web technologies such as React.js and webpack.

I am looking for a team that shares my excitement for pushing the limits of what is currently available in web development. If this sounds like your organization, I would be glad to discuss any employment opportunities with you.
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
				<div className='footer-bar'/>

			</div>
			);
	}
}

export default Portfolio;