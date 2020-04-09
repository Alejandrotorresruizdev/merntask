import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {

  // Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);

  const { formulario,errorformulario,mostrarFormulario,agregarProyecto,mostrarError} = proyectosContext;

  // State para proyecto
  const [proyecto, guardarProyecto] = useState({ nombre: '' });

  // Extraer nombre de proyecto

  const { nombre } = proyecto;

  // Lee los comentatios de los inputs
  const onChangeProyecto = (e) => {
    console.log(e.target.value);
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // Validar el proyecto
    if(nombre === '') {
      mostrarError();
      return;
    }

    // Agregar al state
    agregarProyecto(proyecto);

    // Reiniciar el form
    guardarProyecto({
      nombre:''
    })
  };

  return (
    <Fragment>
      <button 
      type="button" 
      className="btn btn-block btn-primario"
      onClick={()=> mostrarFormulario()}
      >
        Nuevo proyecto
      </button>

      {formulario ? (
        <form onSubmit={onSubmitProyecto} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          ></input>

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar proyecto"
          ></input>
        </form>
      ) : null}

      {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
    </Fragment>
  );
};

export default NuevoProyecto;
