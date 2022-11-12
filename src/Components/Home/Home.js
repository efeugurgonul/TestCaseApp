import React, { Component } from "react";
import Header from "../Header/Header";
import "./Home.sass";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Heading-home">
          <div className="Heading-home-text">Actions to be completed</div>
        </div>
        <div className="Actions">
          <div className="Action-item">
            <svg height="52" width="36">
              <circle cx="18" cy="34" r="18" stroke-width="3" fill="red" />
            </svg>
            <div className="Top-text">Phasellus et sem eget</div>
            <div className="Sub-text">Lorem ipsum dolor sit amet consectetur</div>
            <div className="Point">+500</div>
          </div>
          <div className="Action-item">
            <svg height="52" width="36">
              <circle cx="18" cy="34" r="18" fill="red" />
            </svg>
            <div className="Top-text">Proin in sem molestie</div>
            <div className="Sub-text">Vivamus sodales euismod ornare</div>
            <div className="Point">+600</div>
          </div>
        </div>
      </div>
    );
  }
}
