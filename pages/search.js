import Image from 'next/image'
import React from 'react'
import AppLayout from '../components/layoutes/AppLayout'
import Started from '../components/Started'

import Geology1 from "../public/assets/geology1.jpg"
import Geology2 from "../public/assets/geology2.jpg"

function search() {
  return (
    <AppLayout>

        <section className='max-w-8xl mx-auto px-4 lg:px-1.5 mt-16'>
            <h1 className='text-hero-sm md:text-7xl xl:text-10xl bg-text-gradeint bg-clip-text text-transparent mb-4 text-center lg:text-left'>
            Search.
            </h1>
            <p className='text-4xl lg:text-headline-lg text-center lg:text-left mb-5'>
            Deep AI ExperienceFind Massive Datasets in Milliseconds
            </p>

            <ul className='grid md:grid-cols-3 gap-10 xl:gap-20 py-12 lg:py-20 lg:px-10'>
                <li className='text-xl lg:text-3xl lg:leading-10'>
                    <h1 className='font-extrabold'>Real-time Search</h1>
                    <p className='mt-5 lg:mt-10'>
                    Results appear real-time as you type
                    No more loading screens
                    </p>
                </li>
                <li className='text-xl lg:text-3xl lg:leading-10'>
                    <h1 className='font-extrabold'>
                    Search Across All Your Data
                    </h1>
                    <p className='mt-5 lg:mt-10'>
                    Private + Public Data
                    Well Logs
                    Production History
                    Analytics Reports
                    </p>
                </li>
                <li className='text-xl lg:text-3xl lg:leading-10'>
                    <h1 className='font-extrabold'>
                    Collaborate With Your Team
                    </h1>
                    <p className='mt-5 lg:mt-10'>
                    Add notes, messages and more
                    </p>
                </li>
            </ul>

            <div>
                <div className='flex lg:flex-row lg:justify-between flex-col items-start gap-12 mb-8'>
                    <p className='text-headline-lg lg:text-right'>
                    Porosityio
                    Data
                    </p>
                    <div className='w-full rounded-xl'>
                    <Image src={Geology1} alt="rasmda" />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col items-start gap-12'>
                    <p className='text-headline-lg lg:text-right'>
                    Production
                    Data
                    </p>
                    <div className='w-full rounded-xl'>
                    <Image src={Geology2} alt="rasmda" />
                    </div>
                </div>
            </div>
        </section>

        <Started />
    </AppLayout>
  )
}

export default search