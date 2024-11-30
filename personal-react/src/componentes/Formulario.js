 import React from 'react';
 import '../hojas-de-estilo/Formulario.css';

 function Formulario() {
  return(
  <div className='contenedor-div-formulario'>
  <form className="contenedro-form">
    <p className='titulo_tarea'>Formulario Tareas</p>
    <input type="text" placeholder='Título de la tarea' className='input_titulo'></input>
    <textarea className='descrip_tarea' placeholder='Descripción de la tarea'></textarea>
    <br></br>
    <input type='submit' value="ENVIAR TAREA" className='botonEnvTarea'></input>
  </form>
</div>
) 
}
 export default Formulario;