"use client"
import { links } from "@/app/constants/link";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function NavLink(){
     const [activeLink, setActiveLink] = useState<string | null>(null)
     useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sectionOffsets = links.map((link) => ({
              id:link.href,
              offsetTop: document.getElementById(link.href)?.offsetTop,
              offsetHeight: document.getElementById(link.href)?.offsetHeight,
            }));
            for (const section of sectionOffsets) {
              if (
                scrollPosition >= section.offsetTop! &&
                scrollPosition < section.offsetTop! + section.offsetHeight!
              ) {
                setActiveLink(section.id);
                break;
              }
            }
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
     },[])
     return (
        <nav>
            <ul className=" hidden md:flex items-center gap-5">
                 {
                    links.map((link) => {
                         return (
                            <li key={link.href}>
                                <Link 
                                   href='#about'
                                   className={activeLink == link.href ? 'text-link text-medium active':'text-link text-medium'}
                                >
                                     {link.name}
                                </Link>
                            </li>
                         )
                    })
                 }
            </ul>
            
        </nav>
       
     )
}