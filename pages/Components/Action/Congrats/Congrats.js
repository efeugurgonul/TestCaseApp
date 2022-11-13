import React, { Component } from "react";
import Header from "../../Header/Header";

export default class Congrats extends Component {
  render() {
    return (
      <div className="c-Congrats">
        <Header />
        <div className="c-Container">
          <div className="c-Wrapper">
            <div className="c-Body">
              <div className="c-Frame">
                <div className="c-Vector"></div>
                <div className="c-Frame-text">Congratulations!</div>
              </div>
              <div className="c-Text">
                You've earned points for your participation! <br></br> Keep Up the great work!
              </div>
            </div>
            <div className="c-Footer">
              <div className="c-Button-group">
                <button className="c-Button">
                  <sub className="c-Button-text">Close</sub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
