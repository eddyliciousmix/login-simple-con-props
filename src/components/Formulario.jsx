import './style.css'
import React, { useState } from "react";


export function Formulario({setUser}){

        const [nombre, setNombre ] = useState("");
        const [contrasena, setContrasena ] = useState("");
        const [error, setError ] = useState(false);

        const handleSubmit = (e) =>{
            e.preventDefault()

            if(nombre === "" || contrasena === "") {
                setError(true)
                return
            }
            setError(false)

            setUser([ nombre] )

        }
      


    return(


        <section>

            <div className="body">
            
            <div className="login template d-flex justify-content-center align-items-center vh-100 ">
                <div className="form_container p-5 rounded bg-white">

                    <form 
                        className='formulario'
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-center">Bienvenido al Sistema</h3>
                        <br></br>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input onChange={e=>setNombre(e.target.value)} value={nombre} type="email" placeholder="Ingrese su Usuario" className="form-control"  id="email" />
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange={e=>setContrasena(e.target.value)} value={contrasena} type="password" placeholder="Ingrese su Contraseña" className="form-control" id="password"/>
                        </div>
                        <br></br>
                        <div className="mb-2">
                            <input type="checkbox" className="custom-control custom-checkbox" id="check"/>
                            <label htmlFor="check" className="custom-input-label ms-2">
                                Remember Me
                            </label>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary">Iniciar Sesión</button>
                        </div>
                        <p className="text-end mt-2">
                            Recuperar Contraseña
                        </p>
                    </form>

                    {error && <p className='alarma'>Todos los campos son obligatorios</p>}

                </div>
            </div>
        </div>

        </section>
    )
}