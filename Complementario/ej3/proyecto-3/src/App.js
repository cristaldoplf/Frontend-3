import './App.css';
import Propiedades from './components/Propiedades';
import Componente from './components/Componente';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';

function App() {
  return (
    <div className="App">
      <Componente msg="Hola soy un componente funcional expresado desde una prop"/>
      <hr/>
      <Propiedades 
      defecto="Las Props" 
      cadena="Esto es una cadena" 
      numero={19} 
      booleano={true}
      arreglo={[1,2,3]}
      objeto={{nombre: "pablo",mail:"correo@corre.com"}}
      elementoReact={<i> es un elemento React</i>}
      funcion={num => num*num}
      componenteReact={<Componente msg="Soy un componente pasado como Prop"/>}
      />
      <hr/>
      <Estado/>
      <hr/>
      <RenderizadoCondicional/>
    </div>
  );
}

export default App;
