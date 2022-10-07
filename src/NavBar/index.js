import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import '../News.js/Style.css'

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand"  style={{color:'white'}}>
          NEWS KHABAR
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link">
              <Link to="/" class="nav-link">Home</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
              <Link to="/about" class="nav-link">About</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
              <Link to="/Contact" class="nav-link">Contact</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
