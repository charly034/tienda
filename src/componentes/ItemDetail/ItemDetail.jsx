import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ producto }) => {
  const Cart = useContext(CartContext);
  const [CantidadAgregar, setCantidadArgegar] = useState(1);
  const [resetCont, setResetCont] = useState(1);
  if (!producto) return <p>Cargando...</p>;
  const manejoCantidad = (Cantidad) => {
    setCantidadArgegar(Cantidad);
  };
  const AgregarAlCarrito = () => {
    Cart.AddCarrito(producto, CantidadAgregar);
    setCantidadArgegar(1);
    setResetCont((prev) => prev + 1);
  };
  const yaCompradas = Cart.unidadesCompradas(producto.id);
  const stockDisponible = producto.Stock - yaCompradas;

  return (
    <div className="item-detail-container">
      <img
        src={"/img/" + producto.Imagen}
        alt={producto.Nombre}
        className="item-detail-img"
      />

      <div className="item-detail-info">
        <h2 className="item-detail-title">{producto.Nombre}</h2>
        <p className="item-detail-price">${producto.Precio}</p>
        <p className="item-detail-stock">Stock: {producto.Stock}</p>
        <p className="item-detail-compradas">
          Unidades ya compradas: {yaCompradas}
        </p>
        <p>Unidades Disponibles:{stockDisponible}</p>
        <p>{producto.Descripcion}</p>
        <ItemCount
          Cantidad={manejoCantidad}
          Max={stockDisponible}
          reset={resetCont}
        />
        <button
          className="item-detail-button"
          onClick={AgregarAlCarrito}
          disabled={stockDisponible <= 0}
        >
          {stockDisponible <= 0 ? "No disponible" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
