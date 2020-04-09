import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareasContext";

const Tarea = ({ tarea }) => {
  // Obtener el state del proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Extraer el proyecto
  const [proyectoActual] = proyecto;

  // Obtener las funciones
  const tareaContext = useContext(tareasContext);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    guardarTareaActual,
  } = tareaContext;

  // Función que se ejecuta cuando el usuario presiona el btn ELiminar
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  // Función que modifica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }

    cambiarEstadoTarea(tarea);
  };

  // Agrega una tarea actual cuando se selecciona el boton editar
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          onClick={() => tareaEliminar(tarea.id)}
          type="button"
          className="btn btn-secundario"
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
