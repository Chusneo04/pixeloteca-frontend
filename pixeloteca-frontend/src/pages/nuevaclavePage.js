import React from "react";
import { useState } from "react";
const NuevaClave = () => {

    const [clave, setClave] = useState('');
    const [claveConfirmar, setClaveConfirmar] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`${process.env.REACT_APP_BACKEND}/nueva_clave`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({clave, claveConfirmar, token})
            });

            const data = await response.json()
            alert(data.message)

            if (response.ok) {
                localStorage.removeItem('token')
                window.location.href = '/login'
            }

        } catch (error) {
            alert(error)
        }
    }

    return(
        <div className="w-full min-h-screen bg-[#1C1C1E] flex flex-col items-center gap-[50px] pb-[50px] overflow-hidden">
            <div className="flex flex-col gap-[20px]">
                <h1 className="text-[white] font-extrabold text-[50px]">Nueva Clave</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} placeholder="Clave nueva" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <input type="password" value={claveConfirmar} onChange={(e) => setClaveConfirmar(e.target.value)} placeholder="Confirma tu clave" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <button type="submit" className="bg-[#F0A422] w-[8rem] h-[50px] text-[20px] rounded-[15px] flex items-center justify-center text-center">Guardar clave</button>
                </form>
            </div>
        </div>
    );
};


export default NuevaClave;