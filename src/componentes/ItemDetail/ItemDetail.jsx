import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="item-detail-container">
      <img
        src={"/img/" + producto.Imagen}
        alt={producto.Nombre}
        className="item-detail-img"
      />

      <div className="item-detail-info">
        <h2 className="item-detail-title">{producto.Nombre}</h2>
        <p className="item-detail-price">${producto.Precio}</p>

        <button className="item-detail-button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
