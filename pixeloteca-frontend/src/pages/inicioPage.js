import React from "react";
import Categoria from "../components/categoriaComponent.js";

const Inicio = () => {
    return (
        <div className="w-full min-h-screen bg-[#1C1C1E] flex flex-col items-center gap-[50px] pb-[50px]">
            <div class="w-full flex flex-col items-center gap-[10px] mt-[50px]">
                <h1 className="text-[white] font-extrabold text-[60px]">Pixeloteca</h1>
                <p className="text-[white] text-[25px] text-center w-[80%]">Todo lo que lees, ves y juegas en un solo lugar</p>
            </div>
            <a href="/login" className="bg-[#F0A422] w-[8rem] h-[50px] text-[20px] rounded-[15px] flex items-center justify-center text-center">Entrar</a>
            <div className="w-full flex flex-col items-center justify-center gap-[20px] sm:flex-row">
                <Categoria titulo="Libros" color="#A81139" icono={<i class='fa-solid fa-book'></i>} color_icono="#F75E75"></Categoria>
                <Categoria titulo="Películas" color="#BF9F1D" icono={<i class="fa-solid fa-video"></i>} color_icono="#FCE683"></Categoria>
                <Categoria titulo="Videojuegos" color="#1744AD" icono={<i class="fa-solid fa-gamepad"></i>} color_icono="#6B91F2"></Categoria>
            </div>
        </div>
    );
};

export default Inicio;