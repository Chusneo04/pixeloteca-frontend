import React from "react";
import { useState } from "react";
const RecuperarClave = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/recuperar_clave`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email})
            })

            const data = await response.json();

            alert(data.message)
            
            if (response.ok) {
                localStorage.setItem('token', data.token)
                window.location.href = '/'
            }

        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className="w-full min-h-screen bg-[#1C1C1E] flex flex-col items-center gap-[50px] pb-[50px] overflow-hidden">
            <a href="/" className="text-[white] w-full flex ml-[50px] mt-[50px] text-[20px] underline">Volver a inicio</a>
            <div className="flex flex-col gap-[20px]">
                <h1 className="text-[white] font-extrabold text-[50px]">Recuperar clave</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <button type="submit" className="bg-[#F0A422] w-[8rem] h-[50px] text-[20px] rounded-[15px] flex items-center justify-center text-center">Enviar</button>
                </form>
            </div>
        </div>
    );
};


export default RecuperarClave;