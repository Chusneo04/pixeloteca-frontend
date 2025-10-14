import React from "react";

const Categoria = ({titulo, color, icono, color_icono}) => {
    return (
        <div className={`bg-[${color}] w-[12rem] h-[12rem] flex flex-col items-center justify-center rounded-[20px]`}>
            <div className={`text-[${color_icono}] text-[50px]`}>{icono}</div>
            <h1 className="text-[white] text-[30px]">{titulo}</h1>
        </div>
    )
}

export default Categoria;