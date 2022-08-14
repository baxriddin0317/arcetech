import React from 'react'
import Image from "next/image"

import Black from "../public/assets/blackKub.png"
import White from "../public/assets/whiteKub.png"
import Blue from "../public/assets/blueKub.png"
import Btn from './buttons/Btn'

function Sources() {
  return (
    <section className='mt-20 max-w-8xl mx-auto px-2.5 lg:px-1.5 '>
        <p className='text-3xl md:text-4xl lg:text-4.5xl mb-16 '>
        Predict Using All Your Data, Combine + Ingest All Sources
        </p>

        <ul className='flex items-center justify-between flex-col xl:flex-row gap-y-20 xl:gap-0 pl-0 xl:pl-10'>
            <li>    
                <h3 className='text-headline-lg mb-8 text-center font-normal'>Ingest All Sources</h3>
                <div className='flex flex-row xl:flex-col items-start xl:items-center gap-2 xl:gap-0 rounded-lg bg-sources-gray p-1 xl:w-[420px] h-full xl:h-844 '>
                    <div className='flex w-full flex-col-reverse xl:flex-row items-center xl:relative z-50'>
                        <p className='xl:text-right xl:w-1/3 text-sources-sm md:text-headline-sm'>Seismic Data</p>
                        <Image src={Black} alt="rasmda" />
                    </div>
                    <div className='flex w-full items-center flex-col-reverse xl:flex-row xl:relative z-40 -top-20 '>
                        <p className='xl:text-right xl:w-1/3 text-sources-sm md:text-headline-sm'>Geological Maps</p>
                        <Image src={Black} alt="rasmda" />
                    </div>
                    <div className='flex w-full items-center flex-col-reverse xl:flex-row xl:relative z-30 -top-40'>
                        <p className='xl:text-right xl:w-1/3 text-sources-sm md:text-headline-sm'>Well Logs</p>
                        <Image src={Black} alt="rasmda" />
                    </div>
                    <div className='flex w-full items-center flex-col-reverse xl:flex-row xl:relative z-20 -top-60'>
                        <p className='xl:text-right xl:w-1/3 text-sources-sm md:text-headline-sm'>Historical Completions</p>
                        <Image src={Black} alt="rasmda" />
                    </div>
                    <div className='flex w-full items-center flex-col-reverse xl:flex-row xl:relative z-10 -top-80'>
                        <p className='xl:text-right xl:w-1/3 text-sources-sm md:text-headline-sm'>Historical Production</p>
                        <Image src={Black} alt="rasmda" />
                    </div>
                </div>
            </li>
            <li>
                <div className='flex flex-col rounded-lg bg-sources-gray p-6'>
                    <Image src={Blue} />
                    <h3 className='font-semibold text-center mb-4'>
                        AcreTech AI Drill Ops Suite
                    </h3>
                    <Btn className='' >
                        Get Started Today
                    </Btn>
                </div>
            </li>
            <li>
                <h3 className='text-headline-lg mb-8 text-center font-normal'>Decision-Ready Outputs</h3>
                <div className='flex flex-row xl:flex-col  items-start xl:items-center gap-2 xl:gap-0 rounded-lg xl:w-[420px] bg-sources-gray p-6 xl:pt-28 xl:h-844 '>
                    <div className='flex w-full flex-col xl:flex-row items-center xl:relative z-50'>
                        <Image src={White} />
                        <p className='text-left text-sources-sm md:text-headline-sm xl:w-2/3'>Optimal
                        Drilling Plan</p>
                    </div>
                    <div className='flex w-full flex-col xl:flex-row items-center xl:relative z-40 -top-10 '>
                        <Image src={White} />
                        <p className='text-left text-sources-sm md:text-headline-sm xl:w-2/3'>Hydrocarbon Density Maps</p>
                    </div>
                    <div className='flex w-full flex-col xl:flex-row items-center xl:relative z-30 -top-20'>
                        <Image src={White} />
                        <p className='text-left text-sources-sm md:text-headline-sm xl:w-2/3'>Production Forecasts</p>
                    </div>
                    <div className='flex w-full flex-col xl:flex-row items-center xl:relative z-20 -top-28'>
                        <Image src={White} />
                        <p className='text-left text-sources-sm md:text-headline-sm xl:w-2/3'>Decision-Ready Reservoir Model</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Sources