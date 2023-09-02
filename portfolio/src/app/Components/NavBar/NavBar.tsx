import Image from "next/image";
"use client"
import NavLink from "./NavLink";
import Button from "@/app/Element/Button";
import { useState } from "react";

export default  function NavBar(){
     const [isScrolled, setisScrolled] = useState<boolean>(false)
     return (
         
        <div className={`w-full h-[10vh] flex justify-around items-center nav-fix`}>
             {/* <Image 
                  src='/logo'
                  alt="logo of untitled"
             /> */}
             <h2 className="text-logo font-bold">.Untitled</h2>
             <NavLink />
             <Button label="Contact us" to='#contact' type='secondary'/>
        </div>
         
     )
}