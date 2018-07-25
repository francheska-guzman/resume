import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id='footer-wrapper'>
        <h6>Handmade by <a href="https://github.com/francheska-guzman" target="_black">Francheska Guzman</a>.</h6>
        <a href="mailto:gffrancheska@gmail.com"><img className="footer-icon" src="./images/email-icon.png" alt="Email" /></a>
      	<a href="https://github.com/francheska-guzman" target="_black"><img className="footer-icon" src="./images/github-icon.png" alt="GitHub" /></a>
      	<a href="https://www.linkedin.com/in/francheska-guzman" target="_black"><img className="footer-icon" src="./images/linkedin-icon.png" alt="LinkedIn" /></a>
      </div>
    );
  }
}

export default Footer;