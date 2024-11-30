import React from "react";
import "../hojas-de-estilo/Formulario-mod-tarea.css";

function FormularioModTarea() {
    return (
      <div className="contenedor-mod-tareas">
        <form className="contenedro-form">
          
          <p className="titulo_tarea">Tarea modificada</p>
  
          <input
            type="text"
            placeholder="Título de la tarea"
            className="input_titulo"
          ></input>
  
          <textarea
            className="descrip_tarea"
            placeholder="Descripción de la tarea"
          ></textarea>
  
          <br></br>
  
          <div className="contenedor-botones">
  
            <input
              type="submit"
              value="CAMBIAR TAREA"
              className="botonCambiarTarea"
            ></input>
  
          </div>
  
        </form>
      </div>
    );
  }
  export default FormularioModTarea;
  