import { Link } from "react-router-dom";

const CartWidget = () => {
  // eslint-disable-next-line no-import-assign
  const cartIcon = "./cart4.svg";
  return (
    <div>
      <Link to={"/carrito"}>
        <img src={cartIcon} alt="Cart Icon" />
      </Link>
      <span>0</span>
    </div>
  );
};

export default CartWidget;
