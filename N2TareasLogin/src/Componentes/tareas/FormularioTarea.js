import React,{useState} from 'react'

export const FormularioTarea = props =>{
       //usestate definido como vacio para agregar nuevp campos
       const [Nuevocamp, SetNuew] = useState('');

       //estado encargada de obtener valores ingresados
       const ActualizarCampo = e=> SetNuew (e.target.value);
   
       //Se crea nueva tarea
       const CrearNuevaTarea = ()=>{
           //obtiene valores de Mostrar Proyectos
           props.callback(Nuevocamp);
           // el text quedara en blanco luego de ingresar
           SetNuew('')
           console.log(Nuevocamp)
       }
         
       const onSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <div className="borderborder bg-light w-50 m-auto">
            <h2 className="text-dark fw-bold fs-1 text-center mb-1">Formulario de Tareas
            </h2>
            <form onSubmit={onSubmit} >
                <div className="row ">
                    <div className="input-group mb-1">
                    <div className="input-group-prepend">
                    <span className="input-group-text text-danger fw-bold"><img src="https://img.icons8.com/clouds/40/000000/task.png"/></span>   
                    </div>
                    <input 
                     type='text'
                    className="form-control fs-5 fw-bold"
                    placeholder="Nombre Tarea"
                    name="nombre"
                    value = {Nuevocamp}
                    onChange ={ActualizarCampo}/>
                </div>
                     </div>
                
                    <div className="row">
                    <div className="col-md-12 text-center mb-1">
                    <div className="d-grib">
                    <button className="text-white btn btn-warning text-white fw-bold" type="button" onClick={CrearNuevaTarea}>Guardar Tarea</button>  

                    </div>
                        </div>
                             </div>
            </form>
            
        </div>  
    )
}

export default FormularioTarea;