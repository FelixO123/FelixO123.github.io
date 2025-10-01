const container = document.getElementById("productContainer");

function renderProductos() {
  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.cursor = "pointer";
    card.onclick = () => {
      window.location.href = `/4.1-detalle_productos/index.html?id=${producto.id}`;
    };
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Aprende a programar</p>
      <p class="price">$${producto.precio.toLocaleString()}</p>
     `;
    container.appendChild(card);
  });
}

renderProductos();

    // Función para renderizar los productos
    