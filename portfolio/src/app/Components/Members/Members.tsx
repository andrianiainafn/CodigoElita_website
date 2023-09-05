import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { teams} from "../../constants/teams"
import Title from '@/app/Element/Ttitle'
type Props = {}

const Members = (props: Props) => {
  return (
    <div className=' flex flex-col general-content   items-center font-Exo2 padding-x padding-y'>
      <div className="h-full flex flex-col justify-between  items-center w-full space-y-14">

        {/* Texts section */}
        <div className="h-[18%] flex flex-col  justify-evenly titles">
          {/* Title of the Section */}
          <div className="w-full text-center">
            <div className='w-[15ch] mx-auto '>
                <Title name='our teams' id="teams"/>
            </div>
          
            <h2 className='text-subhead'>Meet the member of our team</h2>
          </div>

          {/* Description below the title*/}
          <div className="text-center text-[#D9D9D9]">
            <p>We are a team of five Developers working in a different domains. The domains shown below represent only each member's specificity</p>
        </div>

        {/* Cards section */}
        <div className="h-[82%] members-cards">
          {
            teams.map((elem,key)=>(
                  <div 
                    key={key} 
                    className={`${elem.classes}`}>

                      <Link href={`portfolio/${elem.name}`}>
                        {/* Avatar */}
                        <div className="avatar w-[8.5rem] h-[8.5rem] rounded-ful flex justify-center">
                            <Image src={elem.avatarUrl} alt='Avatar' width={200} height={100} className='rounded-full object-cover' />
                        </div>
                      </Link>  

                      {/* Abouts */}
                        {/* Name */}
                        <div className="text-center flex justify-center  fnames-container">
                          <h2 className='text-[#0A0E26] font-bold fnames'>{elem.fullName}</h2>
                        </div>
                        {/* Funtion */}
                        <div className="text-center max-w-[90%]">
                          <h3 className='text-secondary'>{elem.domain}</h3>
                        </div>
                      {/* Contants Link */}
                      <div className="flex flex-row w-full justify-center items-center p-0 space-x-6  contacts">
                          <div className='inline-block p-0 m-0 '>
                            <a href={elem.contacts.linkedin} target={'_blank'} className='text-[#3b50a5]'>
                                <FaLinkedin  size="25"  />
                            </a>
                          </div>
                          <div className='inline-block p-0'>
                              <a href={elem.contacts.github} target={'_blank'}>
                                <span className='  flex items-center justify-center   cursor-pointer transition-all ease-in-out duration-300'>
                                  <FaGithub size="25"  />
                                
                                </span>
                              </a>
                            </div>
                      </div>
                   </div>
            ))
          }
        </div>
      </div>
      </div>
    </div>

  )
}

export default Members