import React, { Fragment } from "react";
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyectos = [
        {nombre : 'Elegir Plataforma', estado: true },
        {nombre : 'Elegir Colores', estado: false },
        {nombre : 'Elegir Plataforma de pago', estado: true },
        {nombre : 'Elegir Hosting', estado: false }
    ];
    
  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
          {tareasProyectos === 0 
            ? (<li className="tarea"><p>No hay tareas</p></li>)

            : tareasProyectos.map(tarea => (
                <Tarea 
                    tarea={tarea}
                />
            ) )
          }
      </ul>
      
      <button 
        type="button"
        className="btn btn-eliminar"
        >
            Eliminar proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
