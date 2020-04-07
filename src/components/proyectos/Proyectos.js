import React from "react";
import Slidebar from "../layout/Slidebar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Slidebar />

      <div className="seccion-principal">
        <Barra></Barra>
        <main>
        <FormTarea />
  
          <div className="contenedor-tareas">
              <ListadoTareas/>
          </div>
        </main>
      </div>
    </div>
  );
};

Proyectos.propTypes = {};

export default Proyectos;
