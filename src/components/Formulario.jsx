import { useState } from "react"

export default function Formulario({error, setError, setSuccess}) {

    const [nombre,setNombre] =useState("")
    const [email,setEmail] =useState("")
    const [contraseña,setContraseña] =useState("")
    const [contraseña2,setContraseña2] =useState("")

    const RegexParaNombre= /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/
    const RegexParaEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const validarDatos= (e) => {
        e.preventDefault()

        if (nombre.length === 0) {
            setError("Ingresa tu nombre porfavor")
            setSuccess("")
            
            
        }else if(!RegexParaNombre.test(nombre)){
            setError("El nombre no puede contener numeros ni simbolos")
            setNombre("")
            setSuccess("")

        }else if(email.length === 0){
            setError("Ingresa tu email porfavor")
            setSuccess("")
        }else if(!RegexParaEmail.test(email)){
            setError("El email debe ser como el ejemplo")
            setSuccess("")
            setEmail("")
        }
        else if(contraseña.length=== 0){
            setError("Ingresa una contraseña porfavor")
            setSuccess("")
        }else if(contraseña2.length===0){
            setError("Confirma tu contraseña")
            setSuccess("")
        }else if(contraseña !== contraseña2){
            setError("Las contraseñas no coinciden")
            setSuccess("")
        }
        
        
        else{
            setSuccess("Registro Exitoso")
            setError("")
            setNombre("")
            setEmail("")
            setContraseña("")
            setContraseña2("")
        }
    }
   
    return (
        <div>

            <form onSubmit={validarDatos}>
                <div className="form-group">
                    <input onChange={(e)=>{setNombre(e.target.value)}} value={nombre} type="text" placeholder="Nombre" className="form-control"></input>
                </div>
                <div>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" placeholder="tuemail@ejemplo.com" className="form-control"></input>
                </div>
                <div>
                    <input onChange={(e)=>{setContraseña(e.target.value)}} value={contraseña} type="password" placeholder="Contraseña" className="form-control"></input>
                </div>
                <div>
                    <input onChange={(e)=>{setContraseña2(e.target.value)}} value={contraseña2} type="password" placeholder="Confirma tu Contraseña" className="form-control"></input>
                </div>

                <button type="submit" className="btn
            btn-success">Registrarse</button>
            </form>

        </div>
    )
}