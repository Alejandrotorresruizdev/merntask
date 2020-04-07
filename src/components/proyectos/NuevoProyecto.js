import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  //state para proyecto

  const [proyecto, guardarProyecto] = useState({ nombre: "" });

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

    // Agregar al state

    // Reiniciar el form
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo proyecto
      </button>

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
    </Fragment>
  );
};

export default NuevoProyecto;
