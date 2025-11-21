const MisProdutos = [
  {
    id: 1,
    Nombre: "Camisa",
    Precio: 20000,
    Categoria: "Ropa",
    Imagen: "camisa.jpeg",
  },
  {
    id: 2,
    Nombre: "Pantalon",
    Precio: 40000,
    Categoria: "Ropa",
    Imagen: "pantalon.jpeg",
  },
  {
    id: 3,
    Nombre: "Zapato",
    Precio: 60000,
    Categoria: "Calzado",
    Imagen: "zapato.jpeg",
  },
  {
    id: 4,
    Nombre: "Sombrero",
    Precio: 15000,
    Categoria: "Accesorios",
    Imagen: "sombrero.jpeg",
  },
  {
    id: 5,
    Nombre: "Campera",
    Precio: 80000,
    Categoria: "Ropa",
    Imagen: "campera.jpeg",
  },
  {
    id: 6,
    Nombre: "Zapatilla",
    Precio: 70000,
    Categoria: "Calzado",
    Imagen: "zapatilla.jpeg",
  },
  {
    id: 7,
    Nombre: "Bufanda",
    Precio: 12000,
    Categoria: "Accesorios",
    Imagen: "bufanda.jpeg",
  },
  {
    id: 8,
    Nombre: "Cinturon",
    Precio: 10000,
    Categoria: "Accesorios",
    Imagen: "cinturon.jpeg",
  },
  {
    id: 9,
    Nombre: "Bota",
    Precio: 90000,
    Categoria: "Calzado",
    Imagen: "bota.jpeg",
  },
  {
    id: 11,
    Nombre: "Gorra",
    Precio: 8000,
    Categoria: "Accesorios",
    Imagen: "gorra.jpeg",
  },
  {
    id: 12,
    Nombre: "Sandalia",
    Precio: 30000,
    Categoria: "Calzado",
    Imagen: "sandalia.jpeg",
  },
  {
    id: 13,
    Nombre: "Chaleco",
    Precio: 45000,
    Categoria: "Ropa",
    Imagen: "chaleco.jpeg",
  },
  {
    id: 14,
    Nombre: "Medias",
    Precio: 5000,
    Categoria: "Accesorios",
    Imagen: "medias.jpeg",
  },
  {
    id: 15,
    Nombre: "Botin",
    Precio: 85000,
    Categoria: "Calzado",
    Imagen: "botin.jpeg",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MisProdutos);
    }, 1000);
  });
};
export const getProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MisProdutos.find((producto) => producto.id == id));
    }, 1000);
  });
};
