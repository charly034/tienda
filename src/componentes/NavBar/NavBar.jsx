import React, { useEffect, useState } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";
import { getCategorias } from "../../asyncmock.js";

const NavBar = () => {
  const [Categorias, SetCategorias] = useState([]);

  useEffect(() => {
    getCategorias()
      .then((respuesta) => SetCategorias(respuesta))
      .catch((error) => console.log(error));
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Todos los productos</Link>
        </li>

        {/* Categorías dinámicas */}
        {Categorias.map((cat) => (
          <li key={cat}>
            <Link to={`/categoria/${cat}`}>{cat}</Link>
          </li>
        ))}

        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
