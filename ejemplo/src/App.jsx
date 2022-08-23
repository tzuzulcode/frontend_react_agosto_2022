// import logo from './assets/logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <p className="parrafo">Hola mundo</p>
      <section className='cards'>
        <Card></Card>
        <Card/>
        <Card/>
      </section>
      {/* {} -> se utilizan para escapar codigo de JS */}
      {/* <img src={logo} alt="" /> */}
    </div>
  );
}

export default App;
