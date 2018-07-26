import React, { Component } from 'react';

import Data from './Data';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Connect Four",
      description: "The classic board game Connect Four is a two-player game board in which the players take turns dropping tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.",
      instructions: 'Refer to "How to Play" link located at the top of the board.',
      technologies: "HTML, CSS, and JavaScript.",
      live: "https://francheska-guzman.github.io/connect-four",
      code: "https://github.com/francheska-guzman/connect-four",
      api: "N/A",
      slideshow: null
    }
    this.project = this.project.bind(this);
  }

  project(title, description, instructions, technologies, live, code, api, slideshow) {
    this.setState({
      title: title,
      description: description,
      instructions: instructions,
      technologies: technologies,
      live: live,
      code: code,
      api: api,
      slideshow: slideshow
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 8000,
      cssEase: "linear"
    };

    return (
      <div className='carousel'>
        <Data project={this.project} state={this.state} />
        <div className='project-image'>
          <h3>{this.state.title}</h3>
          <Slider {...settings}>
            <div><img src="./images/project-1/1.png" alt="Image 1" /></div>
            <div><img src="./images/project-1/2.png" alt="Image 2" /></div>
          </Slider>
        </div>
        <div className='project-data'>
            <h4>Description: {this.state.description}</h4>
            <h4>Technologies: {this.state.technologies}</h4>
        </div>
      </div>
    );
  }
}

export default Carousel;