
import './App.css';
import Formulario from "./componentes/Formulario.js";
import FormularioTareas from "./componentes/Formulario-tareas.js";
import FormularioModTarea from "./componentes/Formulario-mod-tarea.js";

function App() {
  return (
    <div className="App">
       <h1 className='tiulo-app'>Bienvenido a tareas TO DO</h1>
      <Formulario />
      <h2 className='tiulo-tareas-exis'>Listado de tareas existentes</h2>
      <FormularioTareas />
      <FormularioModTarea />
    </div>
  );
}

export default App;
