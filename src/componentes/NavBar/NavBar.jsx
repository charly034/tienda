import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Todos los productos</Link>
        </li>
        <li>
          <Link to={"/"}>Camisas</Link>
        </li>{" "}
        <li>
          <Link to={"/"}>Pantalones</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
