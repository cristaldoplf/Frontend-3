import logo from './logo.svg';
import './App.css';
import Boton from "./componentes/Boton"
import ImagenLogo from "./componentes/ImagenLogo"

function App() {
  return (
    <div className="App">
      <Boton/>
      <header className="App-header">
        <img src={ImagenLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Boton/>
      </header>
    </div>
  );
}

export default App;
