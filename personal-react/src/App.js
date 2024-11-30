
import './App.css';
import Formulario from "./componentes/Formulario.js";
import FormularioTareastareas from "./componentes/Formulario-tareas.js";

function App() {
  return (
    <div className="App">
       <h1 className='tiulo-app'>Bienvenido a tareas TO DO</h1>
      <Formulario />
      <h2 className='tiulo-tareas-exis'>Listado de tareas existentes</h2>
      <FormularioTareastareas />
    </div>
  );
}

export default App;
