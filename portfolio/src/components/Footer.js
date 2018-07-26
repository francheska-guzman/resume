import React, { Component } from 'react';

import GitHub from "../images/icons/github-icon.png";
import Email from "../images/icons/email-icon.png";
import LinkedIn from "../images/icons/linkedin-icon.png";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h6>Handmade by <a href="https://github.com/francheska-guzman" target="_black">Francheska Guzman</a>.</h6>
        <a href="https://github.com/francheska-guzman" target="_black"><img className="footer-icon" src={GitHub} alt="GitHub" /></a>
        <a href="mailto:gffrancheska@gmail.com"><img className="footer-icon" src={Email} alt="Email" /></a>
        <a href="https://www.linkedin.com/in/francheska-guzman" target="_black"><img className="footer-icon" src={LinkedIn} alt="LinkedIn" /></a>
      </div>
    );
  }
}

export default Footer;