import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="Header-main">
        <div className="Header-logo">
          <sub className="Header-logo-text">TestCase APP</sub>
        </div>
        <div className="Header-frame">
          <div className="Header-heading">Points: 29,850</div>
        </div>
      </div>
    );
  }
}
