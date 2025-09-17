
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function formatCurrency(num) {
  return "$" + num.toLocaleString();
}

function renderCart() {
  const container = document.getElementById("cart-products");
  const totalEl = document.getElementById("total");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<h3>Tu carrito está vacío</h3>";
    totalEl.textContent = formatCurrency(0);
    return;
  }


  let total = 0;
  cart.forEach((item, i) => {
    const subtotal = item.precio * item.qty;
    total += subtotal;
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.imagen || ''}" alt="${item.nombre}" style="width:60px;height:60px;border-radius:5px;">
        <div style="flex:1">
          <h4>${item.nombre}</h4>
          <button style="border-radius: 75px;" onclick="changeQty(${i}, -1)">-</button>
          <span>${item.qty}</span>
          <button style="border-radius: 75px;" onclick="changeQty(${i}, 1)">+</button>
          <button style="border-radius: 75px; color:red;" onclick="removeFromCart(${i})" style="color:red;">Eliminar</button>
        </div>
        <div class="cart-price">${formatCurrency(subtotal)}</div>
      </div>
    `;
  });
  totalEl.textContent = formatCurrency(total);
}

function changeQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty < 1) cart[index].qty = 1;
  saveCart();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

// Para el botón de checkout (opcional)
function checkout() {
  alert("Compra finalizada ✅ Total: " + document.getElementById("total").textContent);
}

window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.checkout = checkout;

document.addEventListener("DOMContentLoaded", renderCart);







