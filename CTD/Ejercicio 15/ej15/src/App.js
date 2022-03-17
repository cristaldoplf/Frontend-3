import logo from './logo.svg';
import './App.css';
import Hone from './components/Hone';
import styles from "./components/cssModules/encabezado.module.css"

function App() {
  return (
    <div className="App">
      <Hone texto="Pablo" clase={styles.title}/>
    </div>
  );
}

export default App;
