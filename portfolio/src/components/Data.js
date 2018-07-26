import React, { Component } from 'react';

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
      "The classic board game Connect Four is a two-player game board in which the players take turns dropping tokens from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form an horizontal, vertical, or diagonal line of four of one's own token.",
      "Refer to \"How to Play\" link located at the top of the board.",
      "HTML, CSS, and JavaScript.",
      "https://francheska-guzman.github.io/connect-four",
      "https://github.com/francheska-guzman/connect-four",
      "N/A",
      null
    );
  }

  project2() {
    this.props.project(
      "Weather Forecast", 
      "A web application that provides the current weather conditions of five cities.",
      "Select any city to get the detailed information about the weather conditions.",
      "HTML, CSS, JavaScript, JSX, and React.",
      "https://francheska-guzman.github.io/weather-forecast",
      "https://github.com/francheska-guzman/weather-forecast",
      "https://openweathermap.org/api",
      null
    );
  }

  project3() {
    this.props.project(
      "Credit Report", 
      "A financial technology application that calculates the six credit factors based on user’s financial information contained in the Credit Report API.",
      "Type 1 or 2 in the provided input field, to get user's information.",
      "HTML, CSS, JavaScript, JSX, React, Node.js, Express.js, and PostgreSQL.",
      "https://francheska-guzman.github.io/credit-report",
      "https://github.com/francheska-guzman/credit-report",
      "https://creditreportapi.herokuapp.com",
      null
    );
  }

  render() {
    return (
      <div className="data">
          <div>
             <span>Connect Four</span>
             <input type="button" onClick={this.project1} />
          </div>
          <div>
             <span>Weather Forecast</span>
             <input type="button" onClick={this.project2} />
          </div>
          <div>
             <span>Credit Report</span>
             <input type="button" onClick={this.project3} />
          </div>
      </div>
    );
  }
}

export default Data;