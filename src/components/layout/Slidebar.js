import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListadoProyectos from '../proyectos/Listado'

const Slidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto/>
            <div className="proyectos">
                <h2>Listado proyectos</h2>
                <ListadoProyectos/>
            </div>
        </aside>
    )
}

Slidebar.propTypes = {

}

export default Slidebar
