import React, {useState} from "react"
import { Link } from "react-router-dom";

 const Login = ()=> {
     const[usuario, guardarUsuario] = useState({
         email:'',
         password:''
     })
     //console.log (usuario)

     const {email,password} = usuario;
     const onChange = e => {
         guardarUsuario({...usuario,[e.target.name]:e.target.value})
         //console.log(onchange)
           
     }

     //iniciio de sesion
     const onSubmit = e => {
        e.preventDefault();
        
        //Se valida campos vacios
         if(email.trim() === '' || password.trim() === ''){             
             alert ('Debe LLenar los Campos son Obligatorios');
        }else{
            window.location.href ="/proyectos"
        }
    } 
    
         
        return ( 
            <div className="container ">
            <div className="row d-flex justify-content-center mt-5 ">
            <div className="col-9 col-sm-9 col md-5 collg-2 col-md-5 mt-5">
            <div className="card border-dark border-4 bg-gradient">
            <div className="card-body border bg-light">
            <h2 className = "text-center text-uppercase font-weight-bold mt-3 text-success">Iniciar Sesión</h2>
            
        
        <form onSubmit={onSubmit}>
                <div className = 'row'>
                    <div className = 'col-md-12'>
                        <div className = 'input-group mb-3'>
                            <div className = 'input-group-prepend'>
                            <span className="input-group-text text-danger fw-bold"><img src="https://img.icons8.com/bubbles/30/000000/email--v1.png"/></span>
                            </div>
                            <input
                            type ="email"
                            className = "form-control"
                            name="email"
                            placeholder="Tu email"
                            araia-aria-describedby ="basic-addon1"
                            value={email}
                            onChange={onChange}
                            />
                    </div>
                </div>
            </div>
                             

                    <div className = 'row'>
                    <div className = 'col-md-12'>
                        <div className = 'input-group mb-3'>
                            <div className = 'input-group-prepend'>
                            <span className="input-group-text text-danger fw-bold"><img src="https://img.icons8.com/office/30/000000/show-password.png"/></span>
                            </div>
                            <input
                            type ="Password"
                            className = "form-control"
                            placeholder="Tu password"
                            name="password"
                            aria-describedby = 'basic-addon2'
                            value={password}
                            onChange={onChange}
                            />
                             </div>
                        </div>
                    </div>  

                    <div className = 'row'>
                    <div className = 'col-md-8 row d-flex justify-content-center'>
                        <div className = 'campo-form'>
                        <button type="submit" className="btn btn-outline-success btn-gradient">Iniciar </button>
                              </div>
                            </div>
                        
                             <div className = 'col-md'> 
                             <Link to={'/cuenta'} className="btn btn-outline-success btn-gradient">
                                 Obtener Cuenta</Link>
                                 
                            </div>
                         </div>
                     </form>
                </div>
             </div>
        </div>
     </div>
</div>
                                                  
          );
    }
export default  Login;