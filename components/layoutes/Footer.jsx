import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from "../../public/assets/Group.png"

function Footer() {
  return (
    <footer className='max-w-8xl mx-auto px-2.5 lg:px-1.5 pt-24 pb-60'>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-11 gap-x-16'>
        <div>
          <Link href="/">
            <Image src={Logo} alt="rasmda" />
          </Link>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-medium mb-1.5'>
          PRODUCT
          </h2>
          <Link href="/">
            <a  className='text-gray-500 font-light'>
              Drill Ops Product suite
            </a>
          </Link>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-medium mb-1.5'>
          SOLUTIONS
          </h2>
          <Link href="/">
            <a  className='text-gray-500 font-light'>
            E&P’s and Supermajors
            </a>
          </Link>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-medium mb-1.5'>
          COMPANY
          </h2>
          <Link href="/">
            <a  className='text-gray-500 font-light'>
            Core Team
            </a>
          </Link>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl font-medium mb-1.5'>
          CONTACT
          </h2>
          <Link href="/">
            <a  className='text-gray-500 font-light mb-1.5'>
            sales@acretech.ai
            </a>
          </Link>
          <Link href="/">
            <a  className='text-gray-500 font-light'>
            sales@acretech.ai
            </a>
          </Link>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer