import React from "react";
import { useState, useEffect } from "react";

import videojuegos from '../assets/icono_videojuego.png';
import libros from '../assets/icono_libro.png';
import peliculas from '../assets/icono_peliculas.png';

const Perfil = () => {

    const [datos, setDatos] = useState({ usuario: {}, titulos: [] });
    const token = localStorage.getItem('token')
    useEffect(()=>{
        
        fetch(`${process.env.REACT_APP_BACKEND}/perfil/${token}`)
            .then(res => res.json())
            .then(data => setDatos(data))
    }, [token]);


    const imagen = (categoria) => {
        switch (categoria) {
            case 'libros':
                return libros
            case 'videojuegos':
                return videojuegos
            case 'peliculas':
                return peliculas
            default: 
                return null
        }
    }
    
    return(
        <div className="w-full min-h-screen bg-[#1C1C1E] flex flex-col items-center gap-[50px] pt-[10px] lg:pb-[50px] overflow-hidden">
            <div className="flex flex-col h-full w-full">
                <a href="/" className="text-[white] w-full flex lg:ml-[50px] lg:mt-[50px] ml-[10px] text-[20px] underline">Volver a inicio</a>
                <h1 className="text-[white] font-extrabold text-[30px] lg:text-[50px] lg:mt-[20px] text-center">Bienvenido a tu perfil, {datos.usuario.nombre || 'usuario'}</h1>
                <p className="hidden lg:flex flex-row justify-center text-[20px] text-[white]">Aqui podrás ver y gestionar tus libros, películas y videojuegos</p>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
                <a href="/añadir_titulo" className="bg-[orange] w-[60%] h-[40px] rounded-[10px] flex flex-col justify-center items-center text-center md:w-[40%] sm:w-[50%] sm:h-[60px] sm:text-[30px] lg:w-[20%] lg:text-[30px]">Añadir título</a>
                <div className="flex items-center justify-center w-full ">
                    <ul className="w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] place-items-center  rounded mt-[30px] ">
                        {datos.titulos.map((titulo, index) => (
                            <li key={index} className="p-[10px] bg-[white] rounded text-[20px] h-full flex flex-col justify-between">
                                <div className="w-full">
                                    <img className="rounded-t" src={imagen(titulo.categoria)} alt="Imagen de categoria"/>
                                    <p>Nombre: {titulo.nombre}</p>
                                    <p>Categoria: {titulo.categoria}</p>
                                    <p>Fecha de creación: {titulo.fecha}</p>
                                </div>
                                
                                <div className="w-full flex justify-evenly mt-[10px]">
                                    <a href="/editar_titulo" className="bg-[green] text-[white] w-[60px] h-[60px] flex items-center justify-center text-center text-[25px] rounded-[30px]"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a href="/eliminar_titulo" className="bg-[red] text-[white] w-[60px] h-[60px] flex items-center justify-center text-center text-[25px] rounded-[30px]"><i className="fa-solid fa-trash"></i></a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Perfil;