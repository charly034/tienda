import React, { useEffect, useState } from "react";
import { getProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, SetProducto] = useState();
  const param = useParams();
  useEffect(() => {
    getProducto(param.id).then((respuesta) => SetProducto(respuesta));
  }, [param.id]);
  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
