import React from 'react'
import Btn from './buttons/Btn'

function Production() {
  return (
    <section className='mt-32 max-w-[1750px] mx-auto px-2.5 lg:px-1.5'>
        <div className='flex flex-col 2xl:flex-row items-start gap-8'>
            <div className='w-full 2xl:w-[790px]'>
                <h1 className='text-6xl md:text-8xl xl:text-8.5xl font-medium tracking-tighter bg-text-gradeint bg-clip-text text-transparent'>
                    Fewer Wells. More_Production.
                </h1>
                <div className='mt-20 w-11/12'>
                    <h3 className='text-3xl md:text-headline-md font-black'>
                    No More Guesswork
                    </h3>
                    <p className='hidden 2xl:block text-headline-md font-semibold my-11'>
                        The Acretech AI Drill Ops Suite helps customers reduce required well count by predicting the most productive drilling locations
                    </p>
                    <p className='hidden 2xl:block text-headline-md font-semibold mb-4'>
                    Instant decision-ready outputs eliminates months of manual work. 
                    </p>

                    <Btn className="hidden 2xl:block">
                    Get Started Today
                    </Btn>
                </div>
            </div>
            <div className='border 2xl:border-none rounded-lg p-5 w-full mt-10 2xl:mt-0'>
                <div className='flex items-start justify-between mb-20'>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    Theoretical Reduction
                    $ CapEx/barrel
                    </p>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    +25% Known Reservoir
                    +300% Unknown Reservoir
                    </p>
                </div>
                <div className='flex items-start justify-between mb-20'>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    Theoretical Reduction
                    $ CapEx/barrel
                    </p>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    +25% Known Reservoir
                    +300% Unknown Reservoir
                    </p>
                </div>
                <div className='flex items-start justify-between mb-20'>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    Theoretical Reduction
                    in Well Count
                    </p>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    -15% Known Reservoir
                    </p>
                </div>
                <div className='flex items-start justify-between mb-20'>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    Measured Accuracy
                    Production Forecasts
                    </p>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    +15% Known Reservoir
                    </p>
                </div>
                <div className='flex items-start justify-between '>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    Time Saved
                    </p>
                    <p className='text-production-sm md:text-headline-md xl:text-headline-lg font-bold w-1/2'>
                    -99%
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Production