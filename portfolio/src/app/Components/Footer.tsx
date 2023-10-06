import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6'

type Props = {}

export default function Footer(props: Props) {
  return (
    <div className='bg-[#131313] text-[#fff] space-y-4 padding-x padding-y footer'>
        <div className="flex justify-between items-start flex-col md:flex-row ">
            <div className="w-[100%] md:w-[40%]  text-start">
                <h3 className='font-semibold text-[2.5em]'>.Elita</h3>
            </div>
            <div className="flex-1 flex justify-between items-start md:w-[45%] w-[100%] mt-5 list space-y-3">
                <div className="flex flex-col space-y-2">
                    <h6 className='opacity-70'>Overview</h6>
                    <div className="flex flex-col space-y-1 text-sm">
                        <Link href="" className='hover:opacity-70'>About Us</Link>
                        <Link href="" className='hover:opacity-70'>Our Service</Link>
                        <Link href="" className='hover:opacity-70'>Our Project</Link>
                        <Link href="" className='hover:opacity-70'>Teams</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <h6 className='opacity-70'>Our Srvices</h6>
                    <div className="flex flex-col space-y-1 text-sm">
                        <Link href="" className='hover:opacity-70'>UI/UX Design</Link>
                        <Link href="" className='hover:opacity-70'>Web Development</Link>
                        <Link href="" className='hover:opacity-70'>Mobile Development</Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <h6 className='opacity-70'>Overview</h6>
                    <div className="flex flex-col space-y-1 text-sm">
                        <Link href="" className='hover:opacity-70'>(+261) 349852634</Link>
                        <Link href="" className='hover:opacity-70'>untitledteam.pro@gmail.com</Link>
                        <Link href="" className='hover:opacity-70'>Antananarivo-Madagascar</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-[#fff] flex justify-between items-center">
            <div className="">
                <p className='opacity-70'> CodigoElita &#169; {new Date().getFullYear()} </p>
            </div>
            <div className="flex justify-between items-center space-x-2 cursor-pointer">
                <a className='cursor-pointer'>
                    <FaFacebook size="25" />
                </a>
                <a className='cursor-pointer'>
                    <FaLinkedin size="25"  />
                </a>
                <a className='cursor-pointer'>
                   <FaGithub size="25"  />
                </a>
            </div>
        </div>
    </div>
  )
}

