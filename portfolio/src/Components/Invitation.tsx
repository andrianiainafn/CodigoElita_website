import Image from 'next/image'
import React from 'react'

type Props = {}

const Invitation = (props: Props) => {
  return (
    <div className='bg-[#7C3AEDC2] h-[500px] w-full flex justify-between px-32 items-center text-[#f5f5f5]'>
        <div className="w-[40%]">
          <h3 className=' text-[3em]'>
          Why <span className='text-[#1E1E1E]'> Choose Us </span>  For your Next Project
          </h3>
        </div>
        <div className="border-l-2 border-[#f5f5f5] border-solid flex flex-col p-10 w-[45%] space-y-3 ">
          <div className="flex items-center space-x-3">
            <Image src="/check.png" alt='check icons' width={30} height={30} />
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing </h5>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/check.png" alt='check icons' width={30} height={30} />
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing </h5>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/check.png" alt='check icons' width={30} height={30} />
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing </h5>
          </div> 
        </div>
    </div>
  )
}

export default Invitation