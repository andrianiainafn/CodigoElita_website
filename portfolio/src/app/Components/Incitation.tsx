import React from 'react'
import Button from '../Element/Button'

function Incitation() {
  return (
    <div className='text-[#fff]  bg-[#7C3AEDC2] padding-x padding-y'>
        <div className="flex flex-col space-y-4 md:w-[45%] w-[100%] mb-5">
            <h2 className='text-subhead'>
                Let’s create and <span className=''>build</span> something amazing together
            </h2>
        </div>
        <Button type='primary'  label='Get in touch with us' to='#contact' size='large'/>
        <div className=""></div>
    </div>
  )
}

export default Incitation