import Image from 'next/image'
import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <div className='bg-[#fff] flex justify-around items-center space-y-4 padding-x padding-y flex-wrap stats'>
        <div className=" flex flex-col space-y-2 justify-between items-center w-[128px]">
            {/* <Image width={20} height={20} src="/serv.png"  alt='stats icon'/> */}
            <p className='text-secondary  text-subhead'>15+</p>
            <p className='text-body opacity-80'>Projects done</p>
        </div>
        <div className=" flex flex-col space-y-2 justify-between items-center w-[128px]">
            {/* <Image width={20} height={20} src="/serv.png"  alt='stats icon'/> */}
            <p className='text-secondary  text-subhead'>5+</p>
            <p className='text-body opacity-80'>Ongoing Project</p>
        </div>
        <div className=" flex flex-col space-y-2 justify-between items-center w-[128px]">
            {/* <Image width={20} height={20} src="/serv.png"  alt='stats icon'/> */}
            <p className='text-secondary  text-subhead'>90%+</p>
            <p className='text-body opacity-80'>Satisfied clients</p>
        </div>
        <div className=" flex flex-col space-y-2 justify-between items-center w-[128px]">
            {/* <Image width={20} height={20} src="/serv.png"  alt='stats icon'/> */}
            <p className='text-secondary  text-subhead'>10+</p>
            <p className='text-body opacity-80'>Hackatons</p>
        </div>
    </div>
  )
}

export default Stats