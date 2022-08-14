import React from 'react'
import Image from "next/image"
import Logo from "../public/assets/itemLogo.png";
// images
import Item1 from "../public/assets/item1.png"
import Item2 from "../public/assets/item2.png"
import Item3 from "../public/assets/item3.png"
import Item4 from "../public/assets/item4.png"
import Item5 from "../public/assets/item5.png"
import Btn from './buttons/Btn';

function Hero() {
  return (
    <section className='max-w-8xl mx-auto px-4 lg:px-1.5 mt-16'>
        <h1 className='text-hero-sm md:text-7xl xl:text-10xl bg-text-gradeint bg-clip-text text-transparent mb-4 text-center lg:text-left'>Drill Ops Suite</h1>
        <p className='text-4xl lg:text-headline-lg text-center lg:text-left mb-5'>How and Where to Drill.</p>
        
        <div className='max-w-6.5xl mx-auto'>
            {/* List items */}
            <ul className='flex flex-col xl:flex-row sm:w-4/5 mx-auto xl:w-auto pt-79 gap-8 xl:gap-3 mb-22 xl:bg-flow bg-no-repeat xl:bgul'>
                <li className='text-center z-50 bg-drill xl:dril__item'>
                    <div className='flex xl:flex-col items-center text-left xl:text-center md:px-2.5 xl:w-200 p-1'>
                        <div className='hidden xl:inline m-0 -ml-24'>
                            <Image src={Logo} width={134} height={34} />    
                        </div>                    
                        <div className='max-w-full'>
                        <Image src={Item1} width={178} height={178} />
                        </div>
                        <div>
                            <p className='underline text-lg'>SE.1 “Well Searcher”</p>
                            <p className='text-lg'>Nation-wide heat map 
                                determines optimal acrage
                                *Enterprise Plan Only
                            </p>
                        </div>
                    </div>
                </li>
                <li className='text-center z-40 bg-drill xl:dril__item'>
                    <div className='flex xl:flex-col items-center text-left xl:text-center md:px-2.5 xl:w-200 p-1'>
                        <div className='hidden xl:block m-0 -ml-24'>
                        <Image src={Logo} width={134} height={34} />    
                        </div>                    
                        <div className='max-w-full'>
                        <Image src={Item2} width={178} height={178} />
                        </div>
                        <div>
                            <p className='underline text-lg'>                    
                                EXT.1 “Data Extracter”
                            </p>
                            <p className='text-lg'>
                            Auto-extracts Well Information
                            from Raw Well Logs
                            </p>
                        </div>
                    </div>
                </li>
                <li className='text-center z-30 bg-drill xl:dril__item'>
                    <div className='flex xl:flex-col items-center text-left xl:text-center md:px-2.5 xl:w-200 p-1'>
                        <div className='hidden xl:block m-0 -ml-24'>
                        <Image src={Logo} width={134} height={34} />    
                        </div>                    
                        <Image src={Item3} width={178} height={178} />
                        <div>
                            <p className='underline text-lg'>                    
                            EXT.1 “Data Extracter”
                            </p>
                            <p className='text-lg'>
                            Auto-extracts Well Information
                            from Raw Well Logs
                            </p>
                        </div>
                    </div>
                </li>
                <li className='text-center z-20 bg-drill xl:dril__item'>
                    <div className='flex xl:flex-col items-center text-left xl:text-center md:px-2.5 xl:w-200 p-1'>
                        <div className='hidden xl:block m-0 -ml-24'>
                        <Image src={Logo} width={134} height={34} />    
                        </div>                    
                        <Image src={Item4} width={178} height={178} />
                        <div>
                        <p className='underline text-lg'>                    
                        RV.1: “Reservoir Modeler”
                        </p>
                        <p className='text-lg'>
                        Generates Predictions of
                        The Reservoir
                        </p>
                        </div>
                    </div>
                </li>
                <li className='text-center z-10 bg-drill xl:dril__item'>
                    <div className='flex xl:flex-col items-center text-left xl:text-center md:px-2.5 xl:w-200 p-1'>
                        <div className='hidden xl:block m-0 -ml-24'>
                        <Image src={Logo} width={134} height={34} />    
                        </div>                    
                        <Image src={Item5} width={178} height={178} />
                        <div>
                            <p className='underline text-lg'>
                            PL.1 “Well Planner”
                            </p>
                            <p className='text-lg'>
                            Outputs Decision-Ready 
                            Heat Map For Next Wel
                            </p>
                        </div>
                    </div>
                </li>
            </ul>

            <p className='text-4xl lg:text-headline-lg text-center lg:text-left mb-5'>
            End-To-End w/AI
            </p>
            <p className='font-normal text-3xl lg:text-headline-md text-center lg:text-left mb-2.5'>The AcreTech Product Suite works from early exploration to late-stage oil field optimization.
            Our Product Suite can go from recommending optimal acreage to fully optimizing drilling plans
            </p>

            <Btn className="w-full">
            Click Here to Get Started
            </Btn>
        </div>
    </section>
  )
}

export default Hero