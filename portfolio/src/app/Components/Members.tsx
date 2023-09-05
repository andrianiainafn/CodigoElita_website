'use client'
import React from 'react'
import {motion} from 'framer-motion'
import {teams as members} from '../constants/teams'
import { library } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image'

import {
  faTwitter,
  faGithub,
  faFacebookF,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

library.add(
   faFacebookF,
   faLinkedinIn,
   faGithub,
   faTwitter
)

type Props = {}

const Members = (props: Props) => {
  return (
    <div className='bg-[#fff] flex flex-col general-content items-center font-Exo2 space-section'>
    <span id='team'/>
    <div className="h-full flex flex-col justify-between  items-center w-full space-y-14">

      {/* Texts section */}
      <div className="h-[18%] flex flex-col justify-evenly titles">
        {/* Title of the Section */}
        <div className="text-center">
          <h2 className='h2 text-[2rem] text-[#D9D9D9]'>MEET THE MEMBERS OF OUR TEAM</h2>
        </div>

        {/* Description below the title*/}
        <div className="text-center text-[#D9D9D9]">
          <p>We are a team of five Developers working in a different domains. The domains shown below represent only each member's specificity</p>
        </div>
      </div>

      {/* Cards section */}
      <div className="h-[82%] members-cards">
        {
          members.map((elem,key)=>(
                <motion.div 
                initial={{x: elem.direction ? -100 : 100,opacity:0}}
                transition={{duration: 0.5 }}
                whileInView={{x:0,opacity:1}}
                key={key} className={elem.classes}>

                    <Link href={`portfolio/riry`}>
                      {/* Avatar */}
                      <div className="avatar w-[8.5rem] h-[8.5rem] rounded-ful flex justify-center">
                          <Image src={elem.avatarUrl} alt='Avatar' width={200} height={100} className='rounded-full object-cover' />
                      </div>
                    </Link>  

                    {/* Abouts */}
                      {/* Name */}
                      <div className="text-center flex justify-center max-w-[75%] fnames-container">
                        <h2 className='text-[#0A0E26] font-bold fnames'>{elem.fullName}</h2>
                      </div>
                      {/* Funtion */}
                      <div className="max-w-[75%] text-center domain-container">
                        <p className='text-[#BA38F2] font-bold domain'>{elem.domain}</p>
                      </div>
                    {/* Contants Link */}
                    <div className="flex flex-row w-full justify-center p-0 space-x-6  contacts">
                      <div className='inline-block p-0'>
                        <a href='https://github.com/U-ntitled' target={'_blank'}>
                          <span className='icon-span w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-full  p-[6px] text-[#3b5998] hover:bg-[#3b5998] hover:text-white cursor-pointer transition-all ease-in-out duration-300 '>
                            <FontAwesomeIcon 
                            icon={faFacebookF}
                            
                            />
                          </span>
                        </a>
                      </div>
                      <div className='inline-block p-0 m-0'>
                        <a href={elem.contacts.linkedin} target={'_blank'} className=''>
                          <span className='icon-span w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-full  p-[6px] text-[#0072b1] hover:bg-[#0072b1] hover:text-white cursor-pointer transition-all ease-in-out duration-300 '>
                            <FontAwesomeIcon 
                            icon={faLinkedinIn}
                            
                            />
                          </span>
                        </a>
                    </div>
                      <div className='inline-block p-0'>
                        <a href={elem.contacts.github} target={'_blank'}>
                          <span className='icon-span  w-[2.2rem] h-[2.2rem] text-[24px] flex items-center justify-center rounded-full hover:bg-black p-[6px] hover:text-white  text-black  cursor-pointer transition-all ease-in-out duration-300'>
                            <FontAwesomeIcon 
                            icon={faGithub}
                            
                          />
                          </span>
                        </a>
                      </div>
                    </div>
                </motion.div>
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default Members