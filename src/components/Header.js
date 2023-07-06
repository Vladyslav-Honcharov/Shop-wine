import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Favorites from "./Favorites";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            CoolWine
          </Link>

          <div className="header-icons">
            <Cart />
            <Favorites />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
