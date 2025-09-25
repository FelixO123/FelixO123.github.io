const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);

function Formulario(){
    return (
    <div>
        <h1>INGRESAR NOMBRE</h1>
        <input type="text" placeholder="Ingresa tu nombre correctamente" />
    </div>
    )
}
  function App() {
    return <Formulario/>
  }

root.render(App());




