import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/sidebar.css";

const Sidebar = () => {
  const getPath = useLocation().pathname;
  return (
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <i class="bx bxl-react"></i>
          <div className="logo-name">Todos</div>
        </div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="navigation">
        <li className="nav-list">
          <Link to="/">
            <i class="bx bx-home-alt"></i>
            <span className="link-name">Home</span>
          </Link>
        </li>
        <li className="nav-list">
          <Link to="/about/about-app">
            <i class="bx bxl-html5"></i>
            <span className="link-name">About App</span>
          </Link>
        </li>
        {getPath !== "/" ? (
          <li className="nav-list">
            <Link to="/about/about-author/Fadillah">
              <i class="bx bx-user"></i>
              <span className="link-name">About Author</span>
            </Link>
          </li>
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
