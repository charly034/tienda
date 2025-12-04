import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const Provider = CartContext.Provider;
  const [cart, setCart] = useState([]);
  const AddCarrito = (producto, cantidad) => {
    const existe = cart.some((item) => item.id === producto.id);

    if (existe) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === producto.id
            ? { ...item, Cantidad: item.Cantidad + cantidad }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...producto, Cantidad: cantidad }]);
    }
  };

  const totalCarrito = cart.reduce(
    (acc, item) => acc + item.Precio * item.Cantidad,
    0
  );
  const cantidadCarrito = cart.reduce((acc, item) => acc + item.Cantidad, 0);
  const eliminarProducto = (id) => {
    setCart((prev) => prev.filter((item) => item.id != id));
  };
  const vaciarCarrito = () => {
    setCart([]);
  };
  const unidadesCompradas = (id) => {
    const producto = cart.find((item) => item.id === id);
    return producto ? producto.Cantidad : 0;
  };

  const valores = {
    AddCarrito,
    cart,
    totalCarrito,
    vaciarCarrito,
    cantidadCarrito,
    eliminarProducto,
    unidadesCompradas,
  };

  return <Provider value={valores}>{children}</Provider>;
};

export default CartProvider;
