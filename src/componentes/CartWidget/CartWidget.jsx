import { Link } from "react-router-dom";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const Cart = useContext(CartContext);

  const cartIcon = "./carrito.png";
  return (
    <div className="carrito">
      <Link to={"/carrito"}>
        <img src={cartIcon} alt="Cart Icon" />
      </Link>
      <span>{Cart.cantidadCarrito}</span>
    </div>
  );
};

export default CartWidget;
