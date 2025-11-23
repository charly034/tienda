import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { getCategorias } from "../../asyncmock.js";
import "./NavBar.css";

const NavBar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias()
      .then((respuesta) => setCategorias(respuesta))
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-personalizado">
      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          TiendaRopa
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNav"
          aria-controls="menuNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Todos los productos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="dropdownCategorias"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </button>

              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownCategorias"
              >
                {categorias.map((cat) => (
                  <li key={cat}>
                    <Link className="dropdown-item" to={`/categoria/${cat}`}>
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="nav-item ms-3">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
