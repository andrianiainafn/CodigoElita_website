import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { services } from '../constants/services'
import Card from '../Element/service.card'
import Title from '../Element/Ttitle'

type Props = {}

const Service = (props: Props) => {
  return (
    <div className='bg-[#1E1E1E] w-full flex  items-center flex-col  padding-x padding-y'>
        <Title name="Our services" id="services" />
        <div className="w-full flex  flex-col gap-2 text-[#f2f2f2] mb-10">
            <h2 className='text-subhead w-full md:max-w-[24ch]'>The <span className='text-secondary'>services</span> that we offer</h2>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          {
            services.map((item, index) => {
                return (
                    <Card key={index} title={item.title} description={item.description} isPriority={index === 1}/>
                )
            })
          }
        </div>

    </div>
  )
}

export default Service