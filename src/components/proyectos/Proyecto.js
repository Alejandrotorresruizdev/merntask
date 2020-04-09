import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareasContext from "../../context/tareas/tareasContext";

const Proyecto = ({ proyecto }) => {
  // Obtener el state del proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  const tareaContext = useContext(tareasContext);
  const { obtenerTareas } = tareaContext;


  // Función para agregar el proyecto actual
  const selecionarProyecto = (id) => {
    proyectoActual(id); // Fijar proyecto actual
    obtenerTareas(id);  // Filtrar tareas cuando seleccionamos el proyecto
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selecionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
