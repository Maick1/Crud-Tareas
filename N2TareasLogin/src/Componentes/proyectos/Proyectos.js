import React from 'react'
import MenuVertical from '../plantillas/MenuVertical'
import Header from '../plantillas/Header'

import MostrarTareas from './../tareas/MostrarTareas';

const Proyectos =()=> {
    return (
        <div className= "container-fuild">
            <div className = "row min-vh-100 text-white fw-bold">
            <div className = "col-md-3 bg-dark  m-0 p-0 ">
                <MenuVertical/>
            </div>
            <div class=" col-md-9 bg m-0 p-0">
            <Header/>

                <main>
            <div className="text-center mt-3 bg text-danger m-5">
            <MostrarTareas/>  
               
                  </div>
                </main>
            </div>
        </div>
    </div>
           
              
              
                
          
      
        
    )
}

export default Proyectos;
