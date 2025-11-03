import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>
          <CartWidget mensaje="Bienvenido a la tienda" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
