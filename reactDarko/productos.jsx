import React, { useState } from "react";
import { productos as productosBase } from "./productos";

function HomePage() {
  const [productos, setProductos] = useState([]);
  const [contadorId, setContadorId] = useState(1);

  // Agrega un producto aleatorio de productosBase
  const agregarProducto = () => {
    const base = productosBase[Math.floor(Math.random() * productosBase.length)];
    setProductos([
      ...productos,
      {
        ...base,
        id: contadorId
      }
    ]);
    setContadorId(contadorId + 1);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id));
  };

  return (
    <div>
      <button onClick={agregarProducto}>Agregar producto</button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px" }}>
        {productos.map(producto => (
          <div key={producto.id} style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "200px", position: "relative" }}>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
            <h3>{producto.nombre}</h3>
            <p>Aprende a programar</p>
            <p className="price">${producto.precio.toLocaleString()}</p>
            <button onClick={() => eliminarProducto(producto.id)} style={{ position: "absolute", top: "8px", right: "8px" }}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);