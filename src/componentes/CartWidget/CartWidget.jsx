import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  // eslint-disable-next-line no-import-assign
  const cartIcon = "./carrito.png";
  return (
    <div className="carrito">
      <Link to={"/carrito"}>
        <img src={cartIcon} alt="Cart Icon" />
      </Link>
      <span>0</span>
    </div>
  );
};

export default CartWidget;
