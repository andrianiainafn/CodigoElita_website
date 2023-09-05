import React from 'react'
import Form from '../Element/Form'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='flex w-full'>
        <div className="w-[50%] bg-[#d9d9d9] md:flex hidden">

        </div>
        <Form/>
    </div>
  )
}

export default Contact