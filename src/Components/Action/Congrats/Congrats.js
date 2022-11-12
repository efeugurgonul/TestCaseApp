import React, { Component } from "react";
import Header from "../../Header/Header";
import "./Congrats.sass";

export default class Congrats extends Component {
  render() {
    return (
      <div className="Congrats">
        <Header />
        <div className="Container">
          <div className="Wrapper">
            <div className="Body">
              <div className="Frame">
                <div className="Vector"></div>
                <div className="Frame-text">Congratulations!</div>
              </div>
              <div className="Text">
                You've earned points for your participation! <br></br> Keep Up the great work!
              </div>
            </div>
            <div className="Footer">
              <div className="Button-group">
                <button className="Button">
                  <sub className="Button-text">Close</sub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
