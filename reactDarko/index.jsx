
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
      function Header2(){
        return <h3> CHAO MUNDO </h3>;
      }
      
      
      function HomePage(){
        return (<div>
          { }
          <Header />
          <Header2 />
          
        </div>);
      }

      const root = ReactDOM.createRoot(app);
      root.render(<HomePage />);

      //usar live preview
