import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div className="i-Intro">
        <div className="i-Logo">
          <div className="i-Test-case-app">TestCase APP</div>
          <div className="i-Pixel-perfect">"Pixel Perfect"</div>
        </div>
        <div className="i-Cover"></div>
        <div className="i-Container">
          <div className="i-Wrapper">
            <div className="i-Container-body">
              <sub className="i-Heading">Welcome to the TestCase APP!</sub>
              <sub className="i-Text">We created this exercise to gain insights about your development skills.</sub>
            </div>
            <div className="i-Footer">
              <div className="i-Button-group">
                <button className="i-Button">
                  <sub className="i-Button-text">Start</sub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
