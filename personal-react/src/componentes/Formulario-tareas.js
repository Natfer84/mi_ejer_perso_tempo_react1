import React from "react";
import "../hojas-de-estilo/Formulario-tareas.css";

function FormularioTareas() {
  return (
    <div className="contenedor-formulario-tareas">
      <form className="contenedro-form">
        
        <p className="titulo_tarea">Tarea</p>

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
            value="BORRAR TAREA"
            className="botonBorrTarea"
          ></input>

          <input
            type="submit"
            value="ACTUALIZAR TAREA"
            className="botonActTarea"
          ></input>

        </div>

      </form>
    </div>
  );
}
export default FormularioTareas;
