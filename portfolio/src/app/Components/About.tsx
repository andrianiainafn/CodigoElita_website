import { MdArrowForward } from "react-icons/md";
import Button from "../Element/Button";
import Image from "next/image";

export default function About(){
    return (
        <section className="w-full flex justify-around items-center padding-x padding-y ">
            <div className="flex-1 flex flex-col items-baseline">
                <div id="about" className="  title ">
                    <div className="title-line"/> 
                    <h3>About us</h3>
                </div>

                <div>
                    <h2 className="text-subhead font-medium w-[20ch] py-2">
                        <span className="text-secondary">Untitled</span>
                        , a team of Tech Enthusiasts 
                    </h2>
                    <p className="w-[58ch] mb-2 text-[#0d0d00ba]">
                        Our story began at Ecole National D'informatique Fianarantsoa, where we 
                        , as students of Software Engineering, discovered the vast opportunities within the tech landscape.
                      
                    </p>
                    <p className="w-[58ch] mb-5 text-[#0d0d00ba]">
                    United by our curiosity and determination to explore new frontiers, we decided to join forces and form Untitled.
                        This decision marked the beginning of our journey towards creating a meaningful impact through technology.
                    </p>
                    <Button label="Explore our services" type="primary" icon={<MdArrowForward/>} to="#services" size="large"/>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center border rounded-[2rem] bg-[#7c3aed62]">
                 <Image 
                     src='/Teamwork.png'
                     alt="image for about section"
                     width={650}
                     height={400}
                     className="rounded-lg"
                 />
            </div>
        </section>
    )
}