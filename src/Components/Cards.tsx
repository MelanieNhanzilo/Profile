
export default function Cards() {
    return (
        <div className="flex  w-full flex-row items-center">
            <div className="flex flex-col w-2/3 pl-24">
            <div className="flex w-2/3  h-24 bg-[rgb(16, 16, 16)]  border border-gray-800 ">
          <h1 className="text-green-300">Image</h1>
        </div>
        <div className="h-12 flex flex-col ">
         <h1 className="text-white text-sm" >Nome do Projecto</h1>
         <p className="text-green-300  text-sm ">Tecnologias utilizadas no projecto</p>
        </div>
        <div className=" h-6 flex flex-row gap-9">
            <button className="bg-green-300 text-black rounded-sm w-40 text-sm">Acessar o projecto</button>
            <button className="text-sm text-green-300 border border-green-300 rounded-sm w-40">Acessar o repositorio</button>
        
        </div>

            </div>
            <div className="flex-col w-2/3 pr-24  ">
            <div className="px-40 w-2/3 h-24 bg-[rgb(16, 16, 16)] border border-gray-800 rounded-sm ">
        <h1 className="text-green-300">Image</h1>
        </div>
        <div className="h-12 flex flex-col ">
         <h1 className="text-white text-sm" >Nome do Projecto</h1>
         <p className="text-green-300 text-sm ">Tecnologias utilizadas no projecto</p>
        </div>
        <div className=" h-6 flex flex-row gap-9">
            <button className="text-sm bg-green-300 text-black rounded-sm w-40">Acessar o projecto</button>
            <button className=" text-sm text-green-300 border border-green-300 rounded-sm w-40">Acessar o repositorio</button>
        
        </div>

            </div>
        </div>
        
    
    );
  }
  