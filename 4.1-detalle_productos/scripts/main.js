function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id")) || 1;
}

const id = getProductId();
const producto = productos.find(p => p.id === id);

const imagenes = producto.imagen
  ? [producto.imagen]
  : [
      "https://via.placeholder.com/400x300?text=Producto+" + producto.id,
      "https://via.placeholder.com/400x300?text=Vista+2",
      "https://via.placeholder.com/400x300?text=Vista+3"
    ];

function getRandomRelatedProducts(productos, actualId, cantidad) {
  // Filtra el producto actual
  const otros = productos.filter(p => p.id !== actualId);
  // Mezcla aleatoriamente
  for (let i = otros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [otros[i], otros[j]] = [otros[j], otros[i]];
  }
  // Devuelve los primeros 'cantidad'
  return otros.slice(0, cantidad);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nombre").textContent = producto.nombre;
  document.getElementById("precio").textContent = "$" + producto.precio.toLocaleString();
  document.getElementById("descripcion").textContent = producto.descripcion;

  const mainImg = document.getElementById("main-img");
  mainImg.src = imagenes[0];
  const miniaturas = document.getElementById("miniaturas");
  imagenes.forEach(img => {
    const mini = document.createElement("img");
    mini.src = img;
    mini.onclick = () => (mainImg.src = img);
    miniaturas.appendChild(mini);
  });

  document.getElementById("btn-add").onclick = () => {
    let qty = parseInt(document.getElementById("cantidad").value) || 1;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existing = cart.find(item => item.id === producto.id);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ ...producto, qty });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto añadido al carrito");
  };

  // Productos relacionados aleatorios y clickeables
  const relacionados = getRandomRelatedProducts(productos, producto.id, 4);
  const relList = document.getElementById("relacionados-list");
  relacionados.forEach(p => {
    const div = document.createElement("div");
    div.style.cursor = "pointer";
    div.innerHTML = `<img src="${p.imagen || 'https://via.placeholder.com/100x100?text=Prod+'+p.id}" alt="${p.nombre}"><br>${p.nombre}`;
    div.onclick = () => {
      window.location.href = `/4.1-detalle_productos/index.html?id=${p.id}`;
    };
    relList.appendChild(div);
  });
});