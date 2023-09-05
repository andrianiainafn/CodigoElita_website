import Image from 'next/image'
import React from 'react'

type Props = {}

const Invitation = (props: Props) => {
  return (
    <div className='bg-[#7C3AEDC2] h-[400px] w-full flex md:justify-between flex-col md:flex-row md:px-32 px-10 space-y-10 md:space-y-0 justify-center items-center text-[#f5f5f5] padding-x padding-y'>
        <div className="w-full md:w-[50%] ">
          <h3 className=' text-[3em] items-center'>
            Why <span className='text-[#1E1E1E]'> Choose Us </span>  For your Next Project
          </h3>
        </div>
        <div className="border-l-2 border-[#f5f5f5] border-solid flex flex-row md:flex-col  md:p-10 w-full md:w-[45%] md:space-y-3 space-y-0 ">
          <div className="flex items-start space-x-3 ml-3 md:ml-0 ">
            <Image src="/check.png" alt='check icons' width={30} height={30} />
            <h5 className='items-center flex justify-center'>Lorem ipsum dolor sit amet consectetur, adipisicing </h5>
          </div>
          <div className="flex items-start space-x-3">
            <Image src="/check.png" alt='check icons' width={30} height={30} />
            <h5 className='items-center'>Lorem ipsum dolor sit amet consectetur, adipisicing </h5>
          </div>
          <div className="flex items-start space-x-3">
            <Image src="/check.png" alt='check icons' width={30} height={30} />
            <h5 className='items-center'>Lorem ipsum dolor sit amet consectetur, adipisicing </h5>
          </div> 
        </div>
    </div>
  )
}

export default Invitation