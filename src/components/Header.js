import React, { Component } from "react";

import logo from "../assets/logo.svg";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="center">
        <img src={logo} alt="Facebook" />
        <div className="profile">
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    </header>
  );
}

export default Header;
