/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assests/img/logo-dimond.png";



// const isMobile = () => window.innerWidth >= 768;


// function ShowAppName() {
//   if (isMobile()) return <span id="logo">Dimond Music</span>;
// }

// window.addEventListener("resize", ShowAppName());
// isMobile();

// console.log(isMobile());

export default (props) => (
  <nav className="nav">
    <div className="nav-logo">
    <span id="logo">Dimond Music</span>
      <img src={Logo} alt="" />
    </div>
    <div className="nav-itens">
      <div className="open-icon">
        <Link to="/">
          <i className="fa fa-home" title="Home"></i>
        </Link>
        <Link to="/player">
          <i className="fa fa-music" title="Musicas"></i>
        </Link>
        <Link to="/mylist">
          <i className="fa fa-list" title="Minha Lista"></i>
        </Link>
      </div>
    </div>
  </nav>
);
