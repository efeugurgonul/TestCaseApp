import React, { Component } from "react";
import Header from "../../Header/Header";

export default class View extends Component {
  render() {
    return (
      <div className="v-View">
        <Header />
        <div className="v-Container">
          <div className="v-Wrapper">
            <div className="v-Body">
              <div className="v-Frame">
                <div className="v-Circle"></div>
                <div className="v-Point">+500 Points</div>
                <div className="v-Heading">Phasellus et sem eget</div>
              </div>
              <div className="v-Text">Lorem ipsum dolor sit amet consectetur</div>
            </div>
            <div className="v-Footer">
              <div className="v-Button-group">
                <button className="v-Button">
                  <sub className="v-Button-text">Earn points</sub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
