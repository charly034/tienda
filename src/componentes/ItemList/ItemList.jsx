import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ Productos }) => {
  return (
    <div className="Contenedor-Productos">
      {Productos.map((prod) => (
        <div className="tarjeta-producto" key={prod.id}>
          {/* Imagen */}
          <img
            src={"/img/" + prod.Imagen}
            alt={prod.Nombre}
            className="tarjeta-producto-img"
          />

          {/* Título */}
          <h3>{prod.Nombre}</h3>

          {/* Precio */}
          <p>${prod.Precio}</p>

          {/* Botón */}
          <Link to={`/detalle/${prod.id}`} className="boton-detalle">
            Ver detalle
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
