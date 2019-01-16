import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  return (
    <header>
      <a
        className="menu-link"
        href="https://github.com/SaraBon/"
        target="_blank"
      >
        GitHub: @SaraBon
      </a>
      <mail className="menu-link" href="mailto:sara.bongartz@gmail.com">
        sara.bongartz@gmail.com
      </mail>
    </header>
  );
}

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <div className="content">
          <div className="grid">
            <div className="grid-item">
              <div className="label-container">
                <div id="label-left">
                  <p>React</p>
                  <p>Redux</p>
                  <p>Node.js</p>
                  <p>Express</p>
                  <p>MongoDB</p>
                </div>
              </div>
              <a href="https://match-names.herokuapp.com/" target="_blank">
                <img className="grid-img" src="img/matchnames.PNG" />
              </a>
            </div>
            <div className="grid-item">
              <div className="label-container">
                <div id="label-right">
                  <p>React</p>
                </div>
              </div>
              <a
                href="https://sarabon.github.io/minesweeper-react/"
                target="_blank"
              >
                <img className="grid-img" src="img/minesweeper.PNG" />
              </a>
            </div>
            <div className="grid-item">
              <div className="label-container">
                <div id="label-left">
                  <p>React</p>
                  <p>Redux</p>
                </div>
              </div>
              <a
                href="https://sarabon.github.io/draggable-todo-react-redux/"
                target="_blank"
              >
                <img className="grid-img" src="img/todo.PNG" />
              </a>
            </div>
            <div className="grid-item">
              <div className="label-container">
                <div id="label-right">
                  <p> Javascript</p>
                </div>
              </div>
              <a
                href="https://sarabon.github.io/Calculator-Vanilla-JS/"
                target="_blank"
              >
                <img className="grid-img" src="img/calculator.PNG" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
