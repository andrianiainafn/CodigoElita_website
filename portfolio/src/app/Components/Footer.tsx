import Link from 'next/link'
import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <div className='bg-[#131313] text-[#fff] py-12 px-20 space-y-4 footer'>
        <div className="flex justify-between items-start flex-col space-y-5 md:flex-row ">
            <div className="w-[100%] md:w-[40%] text-center md:text-start">
                <h3 className='font-semibold text-[2.5em]'>.Untitled</h3>
            </div>
            <div className="flex justify-between items-start md:w-[45%] w-[100%] mt-5 list space-y-3">
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
                <p className='opacity-70'>copyright@2023.Untitled</p>
            </div>
            <div className="flex justify-between items-center space-x-2">
                <div className='rounded-full h-8 w-8 bg-[#d9d9d9]'/>
                <div className='rounded-full h-8 w-8 bg-[#d9d9d9]'/>
                <div className='rounded-full h-8 w-8 bg-[#d9d9d9]'/>
                <div className='rounded-full h-8 w-8 bg-[#d9d9d9]'/>
            </div>
        </div>
    </div>
  )
}

export default Footer