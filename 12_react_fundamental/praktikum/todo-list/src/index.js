import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./component/Todo";
import Navbar from "./Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Todo />
  </React.StrictMode>,
  document.getElementById("root")
);
