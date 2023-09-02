import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Service = (props: Props) => {
  return (
    <div className='bg-[#1E1E1E] w-full  flex items-center flex-col h-[500px] space-y-16 py-20 px-32'>
        <div className="text-[#f5f5f5] flex items-center  flex-col">
            <h1 className='text-[38px]'>OUR SERVICE</h1>
            <h6 className='opacity-60 text-sm'>The service than we can do for you</h6>
        </div>
        <div className="flex justify-between items-center w-[90%]">
            <div className="serv flex flex-col w-[300px] bg-white p-6 rounded-lg space-y-3 ">
                <Image src='/serv.png' alt='service icons' width={30} height={30}/>
                <h5 className='text-[#000] text-[22px] font-semibold'>User Interface Design</h5>
                <p className='opacity-70 text-sm'>
                    Lorem ipsum dolor sit, amet consectetur adpiscip eilt . Mathis nam sem tellus eart
                </p>
                <Link href="#" className='text-[#7C3AED]'>{`Explore -> `} </Link>
            </div>
            <div className="serv flex flex-col w-[300px] bg-[#A725F6] p-6 rounded-lg space-y-3 ">
                <Image src='/serv.png' alt='service icons' width={30} height={30}/>
                <h5 className='text-[#000] text-[22px] font-semibold'>Web Developement</h5>
                <p className='opacity-70 text-sm text-[#f5f5f5]'>
                    Lorem ipsum dolor sit, amet consectetur adpiscip eilt . Mathis nam sem tellus eart
                </p>
                <Link href="#" className='text-[#f5f5f5]'>{`Explore -> `} </Link>
            </div>
            <div className="serv flex flex-col w-[300px] bg-white p-6 rounded-lg space-y-3 ">
                <Image src='/serv.png' alt='service icons' width={30} height={30}/>
                <h5 className='text-[#000] text-[22px] font-semibold'>Mobile Developemnt</h5>
                <p className='opacity-70 text-sm'>
                    Lorem ipsum dolor sit, amet consectetur adpiscip eilt . Mathis nam sem tellus eart
                </p>
                <Link href="#" className='text-[#7C3AED]'>{`Explore -> `} </Link>
            </div>
        </div>
    </div>
  )
}

export default Service