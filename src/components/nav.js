import React from "react";
import "./nav.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <button className="nav_toggle">---</button>
      <img src="./images/Netflix-logo.png" alt="logo Netflix" />
      <nav className="nav_links">
        <a href="/" className="navlink">
          Accueil
        </a>
        <a href="/" className="navlink">
          Séries
        </a>
        <a href="/" className="navlink">
          Films
        </a>
      </nav>
      <div className="nav_actions">
        <a href="/" className="navactions">
          Search
        </a>
        <a href="/" className="navactions">
          DIRECT
        </a>
        <a href="/" className="navactions">
          Gift
        </a>
        <a href="/" className="navactions">
          Notifications
        </a>
        <a href="/" className="navactions">
          <img
            src="./images/1012c06c7e1b0f8f5e60611992785e5a.png"
            alt="Avatar Profil"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
