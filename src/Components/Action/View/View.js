import React, { Component } from "react";
import Header from "../../Header/Header";
import "./View.sass";

export default class View extends Component {
  render() {
    return (
      <div className="View">
        <Header />
        <div className="Container">
          <div className="Wrapper">
            <div className="Body">
              <div className="Frame">
                <div className="Circle"></div>
                <div className="Point">+500 Points</div>
                <div className="Heading">Phasellus et sem eget</div>
              </div>
              <div className="Text">Lorem ipsum dolor sit amet consectetur</div>
            </div>
            <div className="Footer">
              <div className="Button-group">
                <button className="Button">
                  <sub className="Button-text">Earn points</sub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
