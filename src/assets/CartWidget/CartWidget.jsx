import React from "react";
import cartIcon from "../assets/CartWidget/cart4.svg";

const CartWidget = () => {
  return (
    <div>
      <img src={cartIcon} alt="Cart Icon" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
