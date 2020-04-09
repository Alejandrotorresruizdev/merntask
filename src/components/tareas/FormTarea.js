import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareasContext";

const FormTarea = () => {
  // Obtener el state del proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Agregar las tarea  al proyecto
  const tareaContext = useContext(tareasContext);
  const {
    tareaselecionada,
    agregarTarea,
    validarTarea,
    errortarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea
  } = tareaContext;

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  // Effect que detecte si hay una tarea seleccionada
  useEffect(() => {
    if (tareaselecionada !== null) {
      guardarTarea(tareaselecionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaselecionada]);

  // Extraer los valores del formulario
  const { nombre } = tarea;

  // Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  // Si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destucturing para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const onSubmit = (e) => {
    e.preventDefault();

    // validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // Si es edición o si es nueva tarea
    if(tareaselecionada === null){
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    }else{
      actualizarTarea(tarea);
      limpiarTarea();
    }
 
    //Obtener y filtrar las tareas del proyecto
    obtenerTareas(proyectoActual.id);

    // reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          ></input>
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaselecionada ? 'Editar Tarea' : 'Agregar Tarea'}
          ></input>
        </div>
      </form>

      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
