import  React,{useState} from 'react'
import Proyecto from './Proyecto'
import CrearProyecto from './CrearProyecto'

const MostrarProyectos = () => {
    const [Proyectos,setProyectos]= useState([
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño Sitio Web'}
        ])

        //encargado de validar campo y recibir el nuevo proyecto al diccionario
    const AgregarAray = validar=> {
        if (!Proyectos.find(e => e.nombre === validar) && validar !== '' ){
            setProyectos([...Proyectos, {nombre: validar}])
        }
        //Validaciones mismas tareas
        else if ((Proyectos.find(e => e.nombre === validar))){
            alert ('Proyecto Repetido');
            
        } 
       //Validacion en campos vaciones
        else{
            alert ('Agregue un Proyecto Porfavor');
        }
    }

    return (
        <div>
            <CrearProyecto ingresopro= {AgregarAray}/>
            <h3 className="text-warning border-bottom mt-3 mb-4 fw-bold">Panel De Proyectos</h3>
            <div className="list-group">
                {Proyectos.map (proyecto =>(
                    <Proyecto proyecto = {proyecto}/>    
                ))}
            </div>
        </div>
    )
}

export default MostrarProyectos