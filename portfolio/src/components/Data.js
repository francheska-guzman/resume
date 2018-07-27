import React, { Component } from 'react';

import Project1 from "../assets/images/projects/p1-1.jpg";
import Project2 from "../assets/images/projects/p2-1.jpg";
import Project3 from "../assets/images/projects/p3-1.jpg";

import P1_2 from "../assets/images/projects/p1-2.png";
import P1_3 from "../assets/images/projects/p1-3.png";
import P2_2 from "../assets/images/projects/p2-2.png";
import P2_3 from "../assets/images/projects/p2-3.png";

var description = "Representation of the web application.";

class Data extends Component {
  constructor(props){
    super(props);
    this.project1 = this.project1.bind(this);
    this.project2 = this.project2.bind(this);
    this.project3 = this.project3.bind(this);
  }

  project1() {
    this.props.project(
      "Connect Four", 
      "The classic two-player board game Connect Four. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.",
      "Refer to \"How to Play\" link located at the top of the board.",
      "HTML, CSS, and JavaScript.",
      "https://francheska-guzman.github.io/connect-four",
      "https://github.com/francheska-guzman/connect-four",
      "N/A",
      [<img src={P1_2} alt={description} />, <img src={P1_3} alt={description} />]
    );
  }

  project2() {
    this.props.project(
      "Weather Forecast", 
      "A weather web application that provides actual data of five cities such as minimum and maximum temperature, wind, humidity, and pressure.",
      "Select any city to get the detailed information about the weather conditions.",
      "HTML, CSS, JavaScript, JSX, and React.",
      "https://francheska-guzman.github.io/weather-forecast",
      "https://github.com/francheska-guzman/weather-forecast",
      "https://openweathermap.org/api",
      [<img src={P2_2} alt={description} />, <img src={P2_3} alt={description} />]
    );
  }

  project3() {
    this.props.project(
      "Credit Report", 
      "A financial application that calculates the six credit factors based on user’s financial information contained in the Credit Report API.",
      "Type 1 or 2 in the provided input field to get user's information.",
      "HTML, CSS, JavaScript, JSX, React, Node.js, Express.js, PostgreSQL, and Heroku.",
      "https://francheska-guzman.github.io/credit-report",
      "https://github.com/francheska-guzman/credit-report",
      "https://creditreportapi.herokuapp.com",
      [null, null]
    );
  }

  render() {
    return (
      <div className="data">
          <div className="data-container">
             <h4>Connect Four</h4>
             <button onClick={this.project1}><img src={Project1} alt="Project 1" /></button>
          </div>
          <div className="data-container">
             <h4>Weather Forecast</h4>
             <button onClick={this.project2}><img src={Project2} alt="Project 2" /></button>
          </div>
          <div className="data-container">
             <h4>Credit Report</h4>
             <button onClick={this.project3}><img src={Project3} alt="Project 3" /></button>
          </div>
      </div>
    );
  }
}

export default Data;