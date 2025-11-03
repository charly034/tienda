import NavBar from "./assets/NavBar/NavBar.jsx";
import ItemListContainer from "./assets/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <ItemListContainer mensaje="Bienvenido a la tienda" />
    </>
  );
}

export default App;
