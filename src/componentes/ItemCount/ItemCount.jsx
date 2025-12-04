import React, { useState, useEffect } from "react";

const ItemCount = ({ Cantidad, Max, reset }) => {
  const [contador, setContador] = useState(1);

  useEffect(() => {
    Cantidad(contador);
  }, [contador, Cantidad]);

  useEffect(() => {
    setContador(1);
  }, [reset]);
  const sumarproducto = () => {
    if (contador < Max) {
      setContador((prev) => prev + 1);
    }
  };

  const restarproducto = () => {
    setContador((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="item-detail-contador">
      <button onClick={restarproducto}>-</button>
      <span>{contador}</span>
      <button onClick={sumarproducto}>+</button>
    </div>
  );
};

export default ItemCount;
