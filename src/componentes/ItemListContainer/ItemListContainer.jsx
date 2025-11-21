import React, { useEffect, useState } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);
  const { categoria } = useParams(); // 👈 más claro

  useEffect(() => {
    getProductos(categoria)
      .then((respuesta) => setProductos(respuesta))
      .catch((error) => console.log(error));
  }, [categoria]);

  return (
    <div>
      <ItemList Productos={Productos} />
    </div>
  );
};

export default ItemListContainer;
