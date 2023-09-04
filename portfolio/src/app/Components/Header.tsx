import Image from "next/image";
import Button from "../Element/Button";
import NavBar from "./NavBar/NavBar";
import  { MdArrowBack, MdArrowForward, MdArrowRight, MdNavigateNext } from 'react-icons/md'

export default function Header(){
    return(
        <header className="bg-gradient-header min-h-screen flex-col">
             <NavBar />
             <div className=" w-full h-[90vh] flex flex-col gap-5 items-center mt-20 text-[#0d0d0d]  relative">
                  <h2 className="text-center w-[22ch] text-head font-semibold">
                     Transforming 
                    <span className="text-secondary"> Ideas </span> 
                      into Digital 
                    <span className="text-secondary"> Reality </span>
                  </h2>
                  <p className="text-medium w-[75ch] text-center mb-5 text-[#010101a9]">
                        Whether you’re established enterprise or a growing startup , 
                        we can collaborate with you to bring life to your idea and make huge change to the world together.
                  </p>
                  <Button  label='Explore more' to="#about" type='primary' size="large" icon={<MdArrowForward/>}/>
                  <div>
                      <Image 
                          src='/laptop.png'
                          alt="laptop with code illustation"
                          width={750}
                          height={300}
                      />
                  </div>
                  <div className="absolute bottom-[40%] left-[20%] ">
                       <Image 
                          src='/code.svg'
                          alt="code icon illustration"
                          width={100}
                          height={50}
                       
                       />
                  </div>
                  <div className="absolute top-[20%] right-[20%] ">
                       <Image 
                          src='/code.svg'
                          alt="code icon illustration"
                          width={100}
                          height={50}
                       
                       />
                  </div>
             </div>
             
        </header>
    )
}