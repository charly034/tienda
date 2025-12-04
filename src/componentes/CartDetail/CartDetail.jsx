import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./CartDetail.css";
const CartDetail = () => {
  const {
    cart,
    totalCarrito,
    vaciarCarrito,
    cantidadCarrito,
    eliminarProducto,
  } = useContext(CartContext);
  if (!cart || cart.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  return (
    <div className="CartContainer">
      {cart.map((item, index) => (
        <div key={index} className="CartItem">
          <img
            src={"/img/" + item.Imagen}
            alt={item.Nombre}
            className="tarjeta-producto-img"
          />

          <div>{item.Nombre}</div>
          <div>Cantidad: {item.Cantidad}</div>
          <div>Precio: ${item.Precio}</div>
          <div>Subtotal: ${item.Precio * item.Cantidad}</div>
          <button onClick={() => eliminarProducto(item.id)}>
            Eliminar Producto
          </button>
        </div>
      ))}
      {cantidadCarrito === 1 ? (
        <h3>Tiene 1 producto</h3>
      ) : (
        <h3>Tiene: {cantidadCarrito} productos</h3>
      )}
      <h2>Total: ${totalCarrito}</h2>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>;
    </div>
  );
};

export default CartDetail;
