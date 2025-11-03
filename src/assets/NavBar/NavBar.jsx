import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <CartWidget mensaje="Bienvenido a la tienda" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
