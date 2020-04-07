import React from 'react'
import Proyecto from './Proyecto';


const ListadoProyectos = () => {


    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Diseño de Sitio Web'},
        {nombre: 'Api mongodb'}
    ]

    return (
       <ul className="listado-proyectos">
           {proyectos.map(proyecto =>(
               <Proyecto proyecto={proyecto}/>
           ))}
       </ul>
    )
}

export default ListadoProyectos
