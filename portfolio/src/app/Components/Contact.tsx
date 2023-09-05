import React from 'react'
import Button from '../Element/Button'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='flex w-full padding-x padding-y'>
        <span id="contact"></span>
        <div className="w-[50%] bg-[#d9d9d9] md:flex hidden">

        </div>
        <div className="md:w-[50%] w-[100%] bg-[#fff] p-20 flex flex-col space-y-10 form">
            <div className="flex flex-col">
                <h2 className='font-bold text-[50px] text-start'> Get In Touch </h2>
                <p className='opacity-75 text-start text-medium'>Have an  inquiry ?  Fill out the form to contact our team.</p>
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
                <Button type='primary'  label='Send message' to='/' size='large'/>
            </div>
        </div>
    </div>
  )
}

export default Contact