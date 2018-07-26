import React, { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class Carousel extends Component {
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
        <div className='project-image'>
          <Slider {...settings}>
            <div><img src="./images/project-1/1.png" alt="Image 1" /></div>
            <div><img src="./images/project-1/2.png" alt="Image 2" /></div>
          </Slider>
        </div>
        <div className='project-data'>
            <h3>Project Name</h3>
        </div>
      </div>
    );
  }
}

export default Carousel;