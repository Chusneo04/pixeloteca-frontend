import React, { use } from "react";
import { useState } from "react";
const Login = () => {

    const [email, setEmail] = useState("")
    const [clave, setClave] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email, clave})
            })

            const data = await response.json()

            alert(data.message)

            localStorage.setItem('token', data.token)

            window.location.href = '/perfil'
        } catch (error) {
            alert(error)
        }
    }



    return (
        <div className="w-full min-h-screen bg-[#1C1C1E] flex flex-col items-center gap-[50px] pb-[50px] overflow-hidden">
            <a href="/" className="text-[white] w-full flex ml-[50px] mt-[50px] text-[20px] underline">Volver a inicio</a>
            <div className="flex flex-col gap-[20px]">
                <h1 className="text-[white] font-extrabold text-[50px]">Inicio de sesión</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} placeholder="Clave" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <p className="text-[white]">¿No tienes cuenta? <a href="/register" className="underline">Regístrate</a></p>
                    <button type="submit" className="bg-[#F0A422] w-[8rem] h-[50px] text-[20px] rounded-[15px] flex items-center justify-center text-center">Acceder</button>
                </form>
            </div>
        </div>
    );
};

export default Login;