import React, { Component } from 'react';

import Carousel from './Carousel';

class Projects extends Component {
  render() {
    return (
      <div className='wrapper projects'>
        <h2>Projects</h2>
        <Carousel />
      </div>
    );
  }
}

export default Projects;