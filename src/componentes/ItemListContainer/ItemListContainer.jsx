import React, { useEffect, useState } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>MIS PRODUCTOS</h1>
      <div>
        <ItemList Productos={Productos} />
      </div>
    </>
  );
};

export default ItemListContainer;
