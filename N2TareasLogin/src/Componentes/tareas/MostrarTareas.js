import React,{Fragment,useState} from 'react'
import Tarea from './Tarea'
import {FormularioTarea} from './FormularioTarea'

const MostrarTareas =()=> {

    const [tareas,SetTarea] = useState([
        {nombre: 'Elegir Sistema Operativo',estado:true},
        {nombre: 'Elegir Base de Datos',estado:false},
        {nombre: 'Elegir Lenguaje',estado:true},
        {nombre: 'Elegir Frameworks',estado:false},
    ])
    
        //usestate agregaran nuevos valores 
        const AgregarCampo = agregar =>{
        
        //Validaciones
        if (!tareas.find(e => e.nombre === agregar) && agregar !== '' ){
            SetTarea ([...tareas,{nombre:agregar}])
        }
        //Validaciones mismas tareas
        else if ((tareas.find(e => e.nombre === agregar))){
            alert ('Tarea Repetida');
        } 
       //Validacion en campos vaciones
        else{
            alert ('Agregue una Tarea Porfavor');
        }
    }
    
            //retorna campos de las tares agregadas
            const TablaTareas = ()=>{
                 return tareas.map(tarea =>
                        (<Tarea tarea = {tarea}/>  ))
                        }
    return (
        <Fragment>
            <FormularioTarea callback = {AgregarCampo }/>
            <div className="d-flex justify-content-between m-3">
                <h2><span className="text-dark">Proyecto:</span>
                Comercio Electrónico</h2>
                <button type="submit" className="text-white btn btn-warning text-white">Eliminar Proyecto</button>
            </div>
            {
            tareas.length===0
                ?(<h1>Sin Tarea</h1>)
                :(<div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Tarea</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {TablaTareas()}
                        </tbody>
                    </table>
                </div>
                )
            }
        </Fragment>
    )
}

export default MostrarTareas;
