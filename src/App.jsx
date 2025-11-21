import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componentes/NavBar/NavBar.jsx";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/carrito" element={<p>Pagina del carrito</p>} />

        {/* Detalle de producto */}
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;
