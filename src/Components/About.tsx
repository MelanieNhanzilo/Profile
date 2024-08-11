"use client" 

import { Typewriter } from "react-simple-typewriter";

export default function About (){
    return (
        <div className=" flex  text-white">
            <div className="flex flex-col items-center">
                <p className="text-green-300">Sobre mim</p>
                <p className="flex flex-col justify-center p-20">Meu nome é Melanie Nhanzilo, ou Milena (e como sou chamada em casa) sou 
                        o criador gestora de comunidade na MozDevz Schools, 
                          Developer e UI Designer.
                        Desenvolvo interfaces modernas e de alta qualidade, concentrado
                        em performance, animações, responsividade e SEO.</p> 


                        
            <div className="flex flex-row py-3 px-4">
            <p>Meu <br />
                <Typewriter
                words={[' Email ']}
                loop={2}  
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                  
          />   
          </p> 

          <p>Meu <br />
                <Typewriter
                words={[' Instagram']}
                loop={2}  
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                  
          />   
          </p> 

          <p>Meu <br />
                <Typewriter
                words={[' Nome']}
                loop={2}  
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                  
          />   
          </p> 

            </div>               
            </div>

        </div>
    )
}