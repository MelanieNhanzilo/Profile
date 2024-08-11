"use client" 
export default function NavBar(){
    const name: string ="<Melanie Nhanzilo/>";
    return(
      
        <div className=" w-full flex   text-white justify-between">
            <div className=" w-1/2 flex text-green-300  hover:text-green-400">
       <h3>{name}</h3>

            </div>
            <div className=" w-1/2 pl-32 gap-9 space-x-3">
                <a href="#">Inicio</a>
                <a href="#">Sobre mim</a>
                <a href="#">Projectos</a>
                <a href="#">Servicos</a>
                <a href="#">Habilidades</a>
            </div>

        </div>

    );
}