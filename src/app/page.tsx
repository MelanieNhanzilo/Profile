import About from "@/Components/About";
import Body from "@/Components/Body";
import Cards from "@/Components/Cards";
import Habilidades from "@/Components/Habilidade";
import NavBar from "@/Components/NavBar";
import Services from "@/Components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 bg-black flex flex-col mb-4 gap-10">
      <NavBar/>
      <Body/>
      <About/>
      <h1 className="flex items-center justify-center text-green-300 ">Projectos</h1>
      <Cards/>
      <Cards/>
      <h1 className="flex flex-row justify-center text-green-300 px-96 gap-80">Servicos</h1>
      <Services/>
      <h1 className="flex flex-row justify-center text-green-300 px-96 gap-80">Habilidades</h1>
      <Habilidades/>

      
      

    </div>

   
   
  );
}
