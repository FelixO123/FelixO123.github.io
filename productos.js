const productos = [
    {id: 1,nombre: "Producto 1", precio: 10000, imagen: "",descripcion: "Descripción del Producto 1"},
    {id: 2,nombre: "Producto 2", precio: 20000, imagen: "",descripcion: "Descripción del Producto 2"},
    {id: 3,nombre: "Producto 3", precio: 30000, imagen: "",descripcion: "Descripción del Producto 3"},
    {id: 4,nombre: "Producto 4", precio: 40000, imagen: "",descripcion: "Descripción del Producto 4"},
    {id: 5,nombre: "Producto 5", precio: 50000, imagen: "",descripcion: "Descripción del Producto 5"},
    {id: 6,nombre: "Producto 6", precio: 60000, imagen: "",descripcion: "Descripción del Producto 6"},
    {id: 7,nombre: "Producto 7", precio: 60000, imagen: "",descripcion: "Descripción del Producto 7"},
    {id: 8,nombre: "Producto 8", precio: 60000, imagen: "",descripcion: "Descripción del Producto 8"},
    {id: 9,nombre: "Producto 9", precio: 60000, imagen: "",descripcion: "Descripción del Producto 9"},
    {id: 10,nombre: "Producto 10", precio: 60000, imagen: "",descripcion: "Descripción del Producto 10"},
    {id: 11,nombre: "Producto 11", precio: 60000, imagen: "",descripcion: "Descripción del Producto 11"},
    {id: 12,nombre: "Producto 12", precio: 60000, imagen: "",descripcion: "Descripción del Producto 12"},
    {id: 13,nombre: "Producto 13", precio: 60000, imagen: "",descripcion: "Descripción del Producto 13"},
    {id: 14,nombre: "Producto 14", precio: 60000, imagen: "",descripcion: "Descripción del Producto 14"},
    {id: 15,nombre: "Producto 15", precio: 60000, imagen: "",descripcion: "Descripción del Producto 15"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Guardar carrito
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Agregar producto al carrito
function addToCart(id) {
  const product = productos.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
    alert(`${product.nombre} agregado al carrito`);
}