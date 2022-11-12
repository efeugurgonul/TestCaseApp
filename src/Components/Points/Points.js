import React, { Component } from "react";
import Header from "../Header/Header";
import "./Points.sass";

export default class Points extends Component {
  render() {
    return (
      <div className="Points">
        <Header />
        <div className="Points-group">
          <div className="Points-heading">
            <div className="Points-heading-text">Completed actions</div>
          </div>
          <div className="Points-frame">
            <div className="Points-item">
              <div className="Item-text">Phasellus et sem eget</div>
              <div className="Item-point">+500</div>
            </div>
            <div className="Points-item">
              <div className="Item-text">Phasellus et sem eget</div>
              <div className="Item-point">+500</div>
            </div>
            <div className="Points-item">
              <div className="Item-text">Phasellus et sem eget</div>
              <div className="Item-point">+500</div>
            </div>
            <div className="Points-item">
              <div className="Item-text">Phasellus et sem eget</div>
              <div className="Item-point">+500</div>
            </div>
            <div className="Points-item">
              <div className="Item-text">Phasellus et sem eget</div>
              <div className="Item-point">+500</div>
            </div>
            <div className="Points-item">
              <div className="Item-text">Phasellus et sem eget</div>
              <div className="Item-point">+500</div>
            </div>
            <div className="Points-item">
              <div className="Item-text">Phasellus et sem eget</div>
              <div className="Item-point">+500</div>
            </div>
            <div className="Points-item">
              <div className="Item-text">Phasellus et sem eget</div>
              <div className="Item-point">+500</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
