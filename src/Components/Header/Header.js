import React, { Component } from "react";
import "./Header.sass";

export default class Intro extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Logo">
          <sub className="Header-logo">TestCase APP</sub>
        </div>
        <div className="Frame">
          <div className="Heading">Points: 29,850</div>
        </div>
      </div>
    );
  }
}
