import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const proyectosDB = [
  { id: 1, nombre: "Tienda Virtual" },
  { id: 2, nombre: "Diseño de Sitio Web" },
  { id: 3, nombre: "Api mongodb" },
  { id: 4, nombre: "MERN" },
];

const ProyectoState = (props) => {
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
  };

  //Dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectosDB,
    });
  };

  // Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    // Insertamos el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  // Validar formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  // Selecciona el proyecto del click
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type:ELIMINAR_PROYECTO,
      payload:proyectoId
    })
  }

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
