import './style.css'
const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

function RegistrarProducto(id, nombre, precio){
  return{
    id,
    nombre,
    precio,
  }

}

function Producto({ id, nombre, precio }) {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">${precio.toLocaleString()}</p>
      </div>
    </div>
  );
}

function ListaProductos() {
  const productos = [
    RegistrarProducto(
      1,
      "Libro 1",
      10000,
    ),
    RegistrarProducto(
      2,
      "Libro 2",
      15000,
    )
  ];

  return (
    <div className="container">
      {productos.map((producto) => (
        <Producto key={producto.id} {...producto} />
      ))}
    </div>
  );
}

root.render(<ListaProductos />)



