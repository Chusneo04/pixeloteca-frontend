import React from "react";
import { useState } from "react";

const Register = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [clave, setClave] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({nombre, email, clave})
            })

            const data = await response.json();
            console.log('Data:',data);
            console.log('Response:',response);
            if (!response.ok) {
                throw new Error(data.message)
            }

            if (data.token !== undefined) {
                localStorage.setItem('token', data.token)
                window.location.href = '/perfil'
            }

            
            
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="w-full min-h-screen bg-[#1C1C1E] flex flex-col items-center gap-[50px] pb-[50px] overflow-hidden">
            <a href="/" className="text-[white] w-full flex ml-[50px] mt-[50px] text-[20px] underline">Volver a inicio</a>
            <div className="flex flex-col items-center justify-center gap-[20px] w-[25rem]">
                <h1 className="text-[white] font-extrabold text-[50px]">Registro</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} placeholder="Clave" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <p className="text-[white]">¿No tienes cuenta? <a href="/login" className="underline">Inicia sesión</a></p>
                    <button type="submit" className="bg-[#F0A422] w-[8rem] h-[50px] text-[20px] rounded-[15px] flex items-center justify-center text-center cursor-pointer">Acceder</button>
                </form>
            </div>
        </div>
    );
};

export default Register;