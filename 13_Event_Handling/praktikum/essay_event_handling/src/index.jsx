import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
