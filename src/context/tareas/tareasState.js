import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import TareaContext from "./tareasContext";
import TareaReducer from "./tareasReducer";

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  LIMPIAR_TAREA,
  ACTUALIZAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 3,
        nombre: "Elegir Plataforma de pago",
        estado: true,
        proyectoId: 3,
      },
      { id: 4, nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
      { id: 5, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 6,
        nombre: "Elegir Plataforma de pago",
        estado: true,
        proyectoId: 3,
      },
      { id: 7, nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
      {
        id: 8,
        nombre: "Elegir Plataforma de pago",
        estado: true,
        proyectoId: 3,
      },
      { id: 9, nombre: "Elegir Hosting", estado: false, proyectoId: 4 },
      { id: 10, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
    ],
    tareasproyecto: [],
    errortarea: false,
    tareaselecionada: null,
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Crear las funciones

  // Obtener las tareas de un proyect
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // Agregar tarea al proyecto selecionado
  const agregarTarea = (tarea) => {
    tarea.id = uuidv4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //Valida y muetsra un error en caso de que sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Eliminar tarea por id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // Cambiar el estado de cada tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  // Extrae una tarea para editarla
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  // Actualizar tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  const limpiarTarea = () => {
    dispatch({
      type:LIMPIAR_TAREA,
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaselecionada: state.tareaselecionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
