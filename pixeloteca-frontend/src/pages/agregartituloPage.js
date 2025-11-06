import React, { useState } from "react";
const AgregarTitulo = () => {

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')

    const handleSubmit = async(e) => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_BACKEND}/agregar_titulo`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ titulo, categoria, token })

        })
        const data = await response.json()
        alert(data.message)
    }
    return(
        <div className="w-full min-h-screen bg-[#1C1C1E] flex flex-col items-center gap-[50px] pb-[50px] overflow-hidden">
            <a href="/perfil" className="text-[white] w-full flex ml-[50px] mt-[50px] text-[20px] underline">Volver a perfil</a>
            <div className="flex flex-col gap-[20px]">
                <h1 className="text-[white] font-extrabold text-[50px]">Añadir título</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-[30px]">
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] p-[20px]"/>
                    <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} name="categoria" className="bg-[white] outline-none w-[80%] h-[40px] rounded-[10px] px-[20px] text-[black]">
                        <option value="" disabled>Selecciona una categoría</option>
                        <option value="libros" className="rounded">Libros</option>
                        <option value="peliculas" className="rounded">Películas</option>
                        <option value="videojuegos" className="rounded">Videojuegos</option>
                    </select>
                    <button type="submit" className="bg-[#F0A422] w-[8rem] h-[50px] text-[20px] rounded-[15px] flex items-center justify-center text-center">Acceder</button>
                </form>
            </div>
        </div>
    );
};

export default AgregarTitulo;