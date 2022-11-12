import React, { Component } from "react";
import "./Intro.sass";

export default class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="Logo">
          <div className="Test-case-app">TestCase APP</div>
          <div className="Pixel-perfect">"Pixel Perfect"</div>
        </div>
        <div className="Cover"></div>
        <div className="Container">
          <div className="Wrapper">
            <div className="Container-body">
              <sub className="Heading">Welcome to the TestCase APP!</sub>
              <sub className="Text">We created this exercise to gain insights about your development skills.</sub>
            </div>
            <div className="Footer">
              <div className="Button-group">
                <button className="Button">
                  <sub className="Button-text">Start</sub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
