import React, { useState } from 'react';

const CrearProyecto = ({ingresopro}) => {
    const [formulario,setFormulario] = useState(false)

    const activarFormulario = () => {
        setFormulario(!formulario)
    }

    const[Proyecto,setProyect] = useState('')
    
    const Proyect = e => {setProyect(e.target.value)}

    //Agregar al dar el clic
    const AgregarProyecto = () => {
        ingresopro(Proyecto)
        setProyect('')
    }
    
    return (
    <div>
        <div className = "d-grid pb-3">
            <button className=" btn btn-outline-warning fw-bold fs-4 pt-0"
            type="button"
            onClick={activarFormulario}>Nuevo Proyecto</button>
        </div>
        {formulario
        ?(<form>
            <div className = 'row'>
                <div className = 'col-md-12'>
                    <div className = "input-group my-1">
                        <div className = "input-group-prepend">
                        <span className="input-group-text" ><img src="https://img.icons8.com/office/30/000000/project-setup.png"/></span>
                        </div>
                        <input
                        type="text"
                        className="form-control fw-bold"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value = {Proyecto}
                        onChange={Proyect}/>
                    </div>
                </div>
            </div>
            <div className ='row'>
                <div className='col-md-12 text-center mb-4'>
                    <div className="d-grid m-0">
                        <button type="button" className="btn btn-warning text-black fw-bold" onClick={AgregarProyecto}>Guardar Proyecto </button>
                    </div>
                </div>
            </div>
        </form>) 
        :null
        }
    </div>
    )
}
export default CrearProyecto;