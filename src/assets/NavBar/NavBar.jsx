import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>Todos los productos</li>
        <li>Productos destacados</li>
        <li>Novedades</li>
        <li>
          <CartWidget mensaje="Bienvenido a la tienda" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
