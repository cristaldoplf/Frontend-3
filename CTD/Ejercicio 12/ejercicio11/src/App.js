import logo from './logo.svg';
import './App.css';
import GeneradorLista from './componentes/GeneradorLista';

const listaPerros = [{
  nombre: "Firulais",
  edad: 11,
  sexo: "Macho",
  raza: "Pastor Alemán",
  tamanio: "Grande",
},
{
  nombre: "Maya",
  edad: 13,
  sexo: "Hembra",
  raza: "Pug",
  tamanio: "Chico",
},
{
  nombre: "Pipo",
  edad: 5,
  sexo: "Macho",
  raza: "Schnauzer",
  tamanio: "Mediano",
},
{
  nombre: "Pacha",
  edad: 2,
  Sexo: "Hembra",
  Raza: "Mestizo",
  Tamanio: "Chico",
}]

function App() {
  return (
    <div className="App">
      <h1>Clientes caninos de Veterinaria</h1>
      <div>
          <GeneradorLista listaPerros='perros'/>
      </div>
    </div>
  );
}

export default App;


