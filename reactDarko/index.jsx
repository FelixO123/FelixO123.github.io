
//const domNode = document.getElementById('app');
//const root = ReactDOM.createRoot(domNode);
//root.render(<h1>Develop. Preview. Ship.</h1>);

//function Header() {
//  return <h1>Develop. Preview. Ship.</h1>;
//}
 
//const root = ReactDOM.createRoot(app);
//root.render(<Header />);

function Header() {
        return <h1> HOLA MUNDO </h1>;
      }

      function Header2(props){
        const lista_productos =['manzana','banana','pera']
        return <div>
        <h3> CHAO MUNDO </h3>;
        <ul>
          <li> arg1: {props.arg1}</li>
          <li> arg1: {props.arg2}</li>
        </ul>
        <h2> Lista Productos </h2>
        <ul>
          {lista_productos.map((producto) => (
            <li key={producto}>{producto}</li>
          ))}
        </ul>
        </div>
      }

      function Boton3(){
        return <a href="/1-inicio/index.html"><button> CHAO MUNDO </button></a>;
      }
      
      function BringProductos(){
        return <div>

        </div>
      }


  
 
      
 
      function BotonLikes(){
        const [likes, setLikes] = React.useState(0);
        function handleClick() {
        setLikes(likes + 1);
        }
        
        function dismClick(){
            setLikes(likes-1)
        }
       
        


        return (
        <div>
          <button onClick={handleClick}>Likes ({likes})</button>
          <button onClick={dismClick}>Dislikes ({likes})</button>
        </div>
        );
      }

      

      


      function HomePage(){
        
        return (<div>
          { }
          <Header />
          <BotonLikes />
         
          <Header2 arg1="valor1" arg2="valor2"/>
          <Boton3 />


        </div>);
      }
      // la estructura de el home puede ser como la de una pagina web
      // con <Navbar >, 
      const root = ReactDOM.createRoot(app);
      root.render(<HomePage />);

      //usar live preview
