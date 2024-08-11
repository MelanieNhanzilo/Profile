"use client" 

import image from "../../public/image.svg"
import Image from "next/image"
import { Typewriter } from 'react-simple-typewriter'

export default function Body(){

    const handleType = (count: number) => {
        // access word count number
       

        }
      
    
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }

    return(
        <div className="w-full  text-white flex flex-row items-center">
            <div className=" w-1/2 flex flex-col  py-2">
                <p className="py-2">
                Hello,     <Typewriter
                words={[' Welcome to my profile Iam ']}
                loop={5}  
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}     
          />      </p>

                <h1 className="text-green-300  text-2xl py-2">Melanie Nhanzilo</h1> 
                <p className="py-2">Desenvolvedora 
                <Typewriter
                words={[' Frontend and  Mobile  dev!']}
                loop={5}  
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}     
          />
          </p>
                <button className="bg-green-300 py-2 w-64">
                Baixar Curriculo
                 </button>

            </div>
            <div className="w-1/2 ">
             <Image src={image} alt="Logo" />

            </div>
        </div>
    );
}
