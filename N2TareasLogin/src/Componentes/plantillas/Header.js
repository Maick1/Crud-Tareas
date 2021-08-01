import React from 'react'
import {useState} from "react"

const Header =()=> {
    const [user, setUser] = useState(null)
    const login = () => {
      setUser({id : 1, nombre: "Michael Tomalá"})
    }
    const logout= () =>{
      setUser(null)
    }
    return (
        <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 fs-4 text-warning">Usuario: {user ? user.nombre : " Usuario No Autentificado"}</span>
          {user 
          ? ( <button 
                type="button" 
                className="btn btn-outline-warning btn-gradient"
                onClick={logout}  
                >Cerrar Sesión
              </button>)  
            : (<button 
                type="button" 
                className="btn btn-outline-warning btn-gradient"
                onClick={login}  
                >Iniciar Sesión
              </button>)
          }
        </div>
      </nav>
    )
}

export default Header
