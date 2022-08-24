// import logo from './assets/logo.svg';
import './App.css';
import Card from './components/Card';
import ListaEmojis from './components/ListaEmojis';


function App() {
  return (
    <div className="App">
      <p className="parrafo">Hola mundo</p>
      <section className='cards'>
        <Card title="Card con parrafos" numeroLikes={5} objeto={{name:"Tzuzul",edad:24}} >
          {/* Children */}
          <p>Card 1</p>
          <p>Card 1</p>
          <p>Card 1</p>
          <p>Card 1</p>
        </Card>
        <Card title="Imagen" children={<img src=''/>}/>
        <Card title="Emojis" children={<ListaEmojis/>} emojis={<ListaEmojis/>} />


      </section>
      {/* {} -> se utilizan para escapar codigo de JS */}
      {/* <img src={logo} alt="" /> */}
      <div>{/* Parent node */} 
        <p>Hola</p>{/* childNode */} 
        <p>Hola</p>{/* childNode */} 
        <p>Hola</p>{/* childNode */} 
      </div>
    </div>
  );
}

export default App;
