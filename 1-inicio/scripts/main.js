
const container = document.getElementById("productContainer");

    function renderProductos() {
    // Limitar a los primeros 10
    const primerosDiez = productos.slice(0, 10);

    primerosDiez.forEach(producto => {
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

    function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    alert(`${product.name} agregado al carrito`);
    }
    

 