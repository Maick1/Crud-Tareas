import React from 'react';
import MostrarProyectos from '../proyectos/MostrarProyectos';


function MenuVertical() {
    return (
        <aside className="text-center p-4">
           <h2 className="fst-italic text-warning bg-gradient-black mt-1 mb-5 fw-bold">Gestor de Proyectos</h2>
            <MostrarProyectos/>
            
         </aside>
        )
}
export default MenuVertical;
