import React from 'react'

const Proyecto =({proyecto})=> {
    return (
        <button className = "list-group-item list group-item-action dropdown-item" type="submit">
            {proyecto.nombre}
        </button>
    )
}
export default Proyecto;

