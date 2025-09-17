const productos = [
    {id: 1,nombre: "El Gran Libro de Programacion en C", precio: 15990,imagen: "https://http2.mlstatic.com/D_NQ_NP_657496-MLC85252612083_052025-O.webp",descripcion: "Con este libro, aprenderás desde los conceptos básicos hasta técnicas avanzadas de programación en C. Ideal para principiantes y programadores experimentados que desean perfeccionar sus habilidades."},
    {id: 2,nombre: "Programacion para Principiantes", precio: 5990, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8AN9iPuA3zUu2HPWjyDqn6nvfTvfbWaYXA&s",descripcion: "Programacion para principiantes es una guia completa para aquellos que desean iniciarse en el mundo de la programacion. Con ejemplos claros y ejercicios practicos, este libro te llevara paso a paso desde los conceptos basicos hasta la creacion de tus propios proyectos, ayudandote a entender la logica de la programacion."},
    {id: 3,nombre: "Python de principio a fin", precio: 9990, imagen: "https://m.media-amazon.com/images/S/aplus-media/kdp/347158d0-07a2-4fe8-a122-ba05f819dda5.__CR0,3,220,220_PT0_SX220_V1___.jpg",descripcion: "Python de principio a fin es un libro diseñado para llevarte desde los conceptos basicos hasta las aplicaciones avanzadas del lenguaje de programacion Python. Con explicaciones claras, ejemplos practicos y proyectos interesantes, este libro es ideal tanto para principiantes como para programadores experimentados que desean profundizar en Python."},
    {id: 4,nombre: "JavaScript: The Good Parts", precio: 17990, imagen: "https://www.oreilly.co.jp/books/images/picture_large978-4-87311-391-3.jpeg",descripcion: "JavaScript: The Good Parts es un libro que se enfoca en las mejores caracteristicas del lenguaje de programacion JavaScript. Escrita por Douglas Crockford, esta obra destaca las partes mas efectivas y eficientes de JavaScript, ayudando a los desarrolladores a escribir codigo mas limpio y mantenible."},
    {id: 5,nombre: "Codigo Limpio (Clean Code)", precio: 14990, imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/87/da/87da3d378f0336fd04014c4ea153d064.jpg",descripcion: "Codigo Limpio (Clean Code) es un libro esencial para desarrolladores de software que buscan mejorar la calidad de su codigo. Escrito por Robert C. Martin, este libro ofrece principios y mejores practicas para escribir codigo claro, legible y mantenible, ayudando a los programadores a crear software de alta calidad."},
    {id: 6,nombre: "Design Patterns", precio: 25590, imagen: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/f9e255ba-6512-410c-b6c7-f545d8a65992.__CR197,0,1105,1383_PT0_SX362_V1___.jpg",descripcion: "Design Patterns Elements of Reusable object-oriented Software es un libro fundamental que introduce patrones de diseno para el desarrollo de software orientado a objetos. Escrito por Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides, este libro proporciona soluciones probadas a problemas comunes de diseno, ayudando a los desarrolladores a crear sistemas mas flexibles y reutilizables."},
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