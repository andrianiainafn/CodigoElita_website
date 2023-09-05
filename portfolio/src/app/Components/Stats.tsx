import Image from 'next/image'
import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <div className='bg-[#fff] flex justify-between items-center space-y-4   px-24 py-12 flex-wrap'>
        <div className=" flex flex-col space-y-2 justify-between items-center w-[128px]">
            <Image width={20} height={20} src="/serv.png"  alt='stats icon'/>
            <p className='text-[#7C3AED] font-bold text-2xl'>15 +</p>
            <p className='text-[#000] opacity-80'>Projects done</p>
        </div>
        <div className=" flex flex-col space-y-2 justify-between items-center w-[128px]">
            <Image width={20} height={20} src="/serv.png"  alt='stats icon'/>
            <p className='text-[#7C3AED] font-bold text-2xl'>5 +</p>
            <p className='text-[#000] opacity-80'>Ongoing Project</p>
        </div>
        <div className=" flex flex-col space-y-2 justify-between items-center w-[128px]">
            <Image width={20} height={20} src="/serv.png"  alt='stats icon'/>
            <p className='text-[#7C3AED] font-bold text-2xl'>25 +</p>
            <p className='text-[#000] opacity-80'>Satisfied clients</p>
        </div>
        <div className=" flex flex-col space-y-2 justify-between items-center w-[128px]">
            <Image width={20} height={20} src="/serv.png"  alt='stats icon'/>
            <p className='text-[#7C3AED] font-bold text-2xl'>10 +</p>
            <p className='text-[#000] opacity-80'>Hackatons</p>
        </div>
    </div>
  )
}

export default Stats