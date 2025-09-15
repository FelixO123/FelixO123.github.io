 const productos = [
    {nombre: "Producto 1", precio: 10000, imagen: "",descripcion: "Descripción del Producto 1"},
    {nombre: "Producto 2", precio: 20000, imagen: "",descripcion: "Descripción del Producto 2"},
    {nombre: "Producto 3", precio: 30000, imagen: "",descripcion: "Descripción del Producto 3"},
    {nombre: "Producto 4", precio: 40000, imagen: "",descripcion: "Descripción del Producto 4"},
    {nombre: "Producto 5", precio: 50000, imagen: "",descripcion: "Descripción del Producto 5"},
    {nombre: "Producto 6", precio: 60000, imagen: "",descripcion: "Descripción del Producto 6"},
    {nombre: "Producto 7", precio: 60000, imagen: "",descripcion: "Descripción del Producto 7"},
    {nombre: "Producto 8", precio: 60000, imagen: "",descripcion: "Descripción del Producto 8"},
    {nombre: "Producto 9", precio: 60000, imagen: "",descripcion: "Descripción del Producto 9"},
    {nombre: "Producto 10", precio: 60000, imagen: "",descripcion: "Descripción del Producto 10"},
    {nombre: "Producto 11", precio: 60000, imagen: "",descripcion: "Descripción del Producto 11"},
    {nombre: "Producto 12", precio: 60000, imagen: "",descripcion: "Descripción del Producto 12"},
    {nombre: "Producto 13", precio: 60000, imagen: "",descripcion: "Descripción del Producto 13"},
    {nombre: "Producto 14", precio: 60000, imagen: "",descripcion: "Descripción del Producto 14"},
    {nombre: "Producto 15", precio: 60000, imagen: "",descripcion: "Descripción del Producto 15"}
];
/* LLAMAR TODOS LOS PRODUCTOS*/ 
const container = document.getElementById("productContainer");

    // Función para renderizar los productos
    function renderProductos() {
      productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p class="price">$${producto.precio.toLocaleString()}</p>
          <a href="#" class="btn">Agregar al carrito</a>
        `;
        container.appendChild(card);
      });
    }

    renderProductos();