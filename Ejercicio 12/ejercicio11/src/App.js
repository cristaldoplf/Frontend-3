import logo from './logo.svg';
import './App.css';
import ListadorPerros from './componentes/ListadorPerros';

function App() {
  return (
    <div className="App">
      <h1>Clientes caninos de Veterinaria</h1>
      <div>
        <ListadorPerros/>
      </div>
    </div>
  );
}

export default App;
