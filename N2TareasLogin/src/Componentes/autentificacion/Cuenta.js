import React, {useState,useContext,useEffect} from "react"
import { Link } from "react-router-dom";

const Cuenta = (props)=> {
    const[usuario, guardarUsuario] = useState({
        nombre: '',
        email:'',
        password:'',
        conpassword:''
        
    })

    const {nombre,email,password,conpassword} = usuario;
    const onChange = e => {
        guardarUsuario({...usuario,[e.target.name]:e.target.value})
          
    }

    //iniciio de sesion
    const onSubmit = e => {
       e.preventDefault();
       
       //Se valida campos vacios
        if(nombre.trim() === '' || email.trim() === ''
        || password.trim() === ''
        || conpassword.trim() === ''){             
            alert ('Debe LLenar los Campos son Obligatorios');
            return;
       }

       //Contraseña minimo de caracter
       if(password.length < 6){
        alert ('La contraseña debe tener Minimo 6 Caracteres');
        return;  
       }

       if(password !== conpassword){
        alert ('Contraseñas no Coinciden','alerta-error');
        return;  
       }else{
        window.location.href ="/"
    }
   } 
   
   return ( 
  
        <div className="container">
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
                        <span className="input-group-text text-danger fw-bold"><img src="https://img.icons8.com/plasticine/30/000000/name.png"/></span>
                        </div>
                        <input
                        type ="text"
                        className = "form-control"
                        name="nombre"
                        placeholder="Nombre"
                        araia-aria-describedby ="basic-addon1"
                        value={nombre}
                        onChange={onChange}
                        />
                    </div>
                </div>
            </div>
                         

                <div className = 'row'>
                <div className = 'col-md-12'>
                    <div className = 'input-group mb-3'>
                        <div className = 'input-group-prepend'>
                        <span className="input-group-text text-danger fw-bold"><img src="https://img.icons8.com/office/30/000000/email.png"/></span>
                        </div>
                        <input
                        type ="email"
                        className = "form-control"
                        name="email"
                        placeholder="Tu E-mail"
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
                        <span className="input-group-text text-danger fw-bold"><img src="https://img.icons8.com/bubbles/30/000000/password.png"/></span>
                        </div>
                        <input
                        type ="Password"
                        className = "form-control"
                        placeholder="PassWord"
                        name="password"
                        aria-describedby = 'basic-addon2'
                        value={password}
                        onChange={onChange}
                        />
                         </div>
                    </div>
                </div> 

                <div className = 'row'>
                <div className = 'col-md-12'>
                    <div className = 'input-group mb-3'>
                        <div className = 'input-group-prepend'>
                        <span className="input-group-text text-danger fw-bold"><img src="https://img.icons8.com/bubbles/30/000000/password.png"/></span>
                        </div>
                        <input
                        type ="Password"
                        className = "form-control"
                        placeholder="Confirmar PassWord"
                        name="conpassword"
                        aria-describedby = 'basic-addon2'
                        value={conpassword}
                        onChange={onChange}
                        />
                         </div>
                    </div>
                 </div>  
                               

                <div className = 'row'>
                <div className = 'col-md-8 row d-flex justify-content-center'>
                    <div className = 'campo-form'>
                    <button type="submit" className="btn btn-outline-success btn-gradient">Registarme</button>
                          </div>
                         </div>
                    
                         <div className = 'col-md'> 
                         <Link to={'/'} className="btn btn-outline-success btn-gradient">
                         Iniciar Sesion </Link>
                             
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
export default  Cuenta;
