import React, { Component } from "react";
import Header from "../Header/Header.js";

export default class Home extends Component {
  render() {
    return (
      <div className="h-Home">
        <Header />
        <div className="h-Heading-home">
          <div className="h-Heading-home-text">Actions to be completed</div>
        </div>
        <div className="h-Actions">
          <div className="h-Action-item">
            <div className="h-Circle"></div>
            <div className="h-Top-text">Phasellus et sem eget</div>
            <div className="h-Sub-text">Lorem ipsum dolor sit amet consectetur</div>
            <div className="h-Point">+500</div>
          </div>
          <div className="h-Action-item">
            <div className="h-Circle"></div>
            <div className="h-Top-text">Proin in sem molestie</div>
            <div className="h-Sub-text">Vivamus sodales euismod ornare</div>
            <div className="h-Point">+600</div>
          </div>
          <div className="h-Action-item">
            <div className="h-Circle"></div>
            <div className="h-Top-text">Proin in sem molestie</div>
            <div className="h-Sub-text">Vivamus sodales euismod ornare</div>
            <div className="h-Point">+600</div>
          </div>
          <div className="h-Action-item">
            <div className="h-Circle"></div>
            <div className="h-Top-text">Proin in sem molestie</div>
            <div className="h-Sub-text">Vivamus sodales euismod ornare</div>
            <div className="h-Point">+600</div>
          </div>
          <div className="h-Action-item">
            <div className="h-Circle"></div>
            <div className="h-Top-text">Proin in sem molestie</div>
            <div className="h-Sub-text">Vivamus sodales euismod ornare</div>
            <div className="h-Point">+600</div>
          </div>
          <div className="h-Action-item">
            <div className="h-Circle"></div>
            <div className="h-Top-text">Proin in sem molestie</div>
            <div className="h-Sub-text">Vivamus sodales euismod ornare</div>
            <div className="h-Point">+600</div>
          </div>
          <div className="h-Action-item">
            <div className="h-Circle"></div>
            <div className="h-Top-text">Proin in sem molestie</div>
            <div className="h-Sub-text">Vivamus sodales euismod ornare</div>
            <div className="h-Point">+600</div>
          </div>
        </div>
      </div>
    );
  }
}
