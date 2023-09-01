import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='flex w-full'>
        <div className="w-[50%] bg-[#d9d9d9] md:flex hidden">

        </div>
        <div className="w-[50%] bg-[#fff] p-20 flex flex-col space-y-10">
            <div className="flex flex-col">
                <h2 className='font-bold text-[50px] text-start'> Get In Touch </h2>
                <p className='opacity-75 text-start text-sm'>Have an  inquiry ?  Fill out the form to contact our team.</p>
            </div>
            <div className="flex flex-col space-y-9">
                <div className="flex flex-col space-y-3">
                    <label htmlFor="fname" className='text-base opacity-80'>Full Name</label>
                    <input type='text' name='fname' className='outline-none  border-solid border-[1px] border-[#000] border-opacity-40 rounded-lg p-2' />
                    <label htmlFor="email" className='text-base opacity-80'>Email</label>
                    <input type='email' name='fname' className='outline-none  border-solid border-[1px] border-[#000] border-opacity-40 rounded-lg p-2' />
                    <label htmlFor="message" className='text-base opacity-80'>Message</label>
                    <textarea  name='message' className='outline-none  border-solid border-[1px] border-[#000] border-opacity-40 rounded-lg p-2' />
                </div>
                <button className='bg-[#7C3AED] text-[#f5f5f5] px-6 py-2 w-[200px]' >Send message</button>
            </div>
        </div>
    </div>
  )
}

export default Contact