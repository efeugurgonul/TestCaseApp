import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
//import Intro from "./Components/Intro/Intro";
//import Header from "./Components/Header/Header";
//import Home from "./Components/Home/Home";
//import View from "./Components/Action/View/View";
import Congrats from "./Components/Action/Congrats/Congrats";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Congrats />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
