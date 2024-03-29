import React from 'react'
import Button from '../Element/Button'
import Image from 'next/image'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='flex w-full justify-between items-center md:gap-10  padding-x padding-y'>
        <span id="contact"></span>
        <div className="flex-1 lg:flex hidden">
              <Image 
                 src='/contact.png'
                 alt='contact illustation'
                 width={650}
                 height={400}
              />
        </div>
        <div className="flex-1 w-full md:w-[50%]  bg-[#fff]  flex flex-col  space-y-10 form">
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