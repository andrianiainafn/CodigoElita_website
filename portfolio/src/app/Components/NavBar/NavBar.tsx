import Image from "next/image";
"use client"
import NavLink from "./NavLink";
import Button from "@/app/Element/Button";
import { useState } from "react";

export default  function NavBar(){
     const [isScrolled, setisScrolled] = useState<boolean>(false)
     return (
         
        <div className={`w-full h-[10vh] flex justify-around items-center fixed top-0 mb-10 backdrop-filter backdrop-blur-lg z-10 bg-opacity-30 border-b border-gray-200`}>
             {/* <Image 
                  src='/logo'
                  alt="logo of TechXcel"
             /> */}
             <h2 className="text-logo font-bold">.TechXcel</h2>
             <NavLink />
             <Button label="Contact us" to='#contact' type='secondary'/>
        </div>
         
     )
}