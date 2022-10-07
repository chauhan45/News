import React from "react";
import "../News.js/Style.css";
import { Routes, Route, Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div class="sidenav">
        <a >
          <Link to="/" class="nav-link fontFamily ">Home</Link>
        </a>
        <a >
          <Link to="/about" class="nav-link fontFamily">About</Link>
        </a>
        <a>
          {" "}
          <Link to="/Contact" class="nav-link fontFamily">Contact</Link>
        </a>
        <a>
          {" "}
          <Link to="/Contact" class="nav-link fontFamily">Block</Link>
        </a>
        <a>
          {" "}
          <Link to="/Contact" class="nav-link fontFamily">Hamber</Link>
        </a>
      </div>
    </>
  );
};
export default SideBar;
