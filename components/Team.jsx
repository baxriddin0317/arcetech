import Image from 'next/image'
import React from 'react'

// image imports
import Person1 from "../public/assets/team/person1.png"
import Person2 from "../public/assets/team/person2.png"
import Person3 from "../public/assets/team/person3.png"
import Person4 from "../public/assets/team/person4.png"
import Person5 from "../public/assets/team/person5.png"
import Person6 from "../public/assets/team/person6.png"
 
function Team() {
  return (
    <section className='max-w-8xl mx-auto px-4 lg:px-1.5 mt-16'>
        <h1 className='text-hero-sm md:text-7xl xl:text-10xl bg-text-gradeint bg-clip-text text-transparent mb-4 text-center lg:text-left'>
        Meet Our Team.
        </h1>
        <p className='text-4xl lg:text-headline-lg text-center lg:text-left mb-5'>
            Deep AI Experience
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
            <div>
                <h3 className='text-headline-lg font-medium mb-2.5'>
                Core Team
                </h3>
                <ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    <li className='flex flex-col'>
                        <Image src={Person1} width={228} alt="rasmda" />
                        <h2 className='text-xl font-semibold mb-10 mt-5'>
                            Ryan Farell<br/>
                            CEO, Machine Learning
                        </h2>
                        <p className='text-xl font-semibold'>
                            PhD Candidate<br/>
                            UT Austin AI
                        </p>
                    </li>
                    <li className='flex flex-col'>
                        <Image src={Person2} width={228} alt="rasmda" />
                        <h2 className='text-xl font-semibold mb-10 mt-5'>
                        Chandrajit Bajaj, PhD<br/>
                        Machine Learning
                        </h2>
                        <p className='text-xl font-semibold'>
                        Director of Computer Vision<br/>
                        UT Austin AI
                        </p>
                    </li>
                    <li className='flex flex-col'>
                        <Image src={Person3} width={228} alt="rasmda" />
                        <h2 className='text-xl font-semibold mb-10 mt-5'>
                        Sean McLean<br/>
                        Data Engineering
                        </h2>
                        <p className='text-xl font-semibold'>
                        Master’s Candidate <br/>
                        UT Austin AI<br/>
                        Prev. GoDaddy Data Eng
                        </p>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-headline-lg font-medium mb-2.5'>
                Core Team
                </h3>
                <ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-start'>
                    <li className='flex flex-col'>
                        <Image src={Person4} width={228} alt="rasmda" />
                        <h2 className='text-xl font-semibold mb-10 mt-5'>
                        Anson Hwang <br/>
                        Advisor + Investor
                        </h2>
                        <p className='text-xl font-semibold'>
                        Founder <br/>
                        Eight Acres Capital <br/>
                        Prev. Goldman Sachs SSG
                        </p>
                    </li>
                    <li className='flex flex-col'>
                        <Image src={Person5} width={228} alt="rasmda" />
                        <h2 className='text-xl font-semibold mb-10 mt-5'>
                        Alex Garcia <br/>
                        Advisor 
                        </h2>
                        <p className='text-xl font-semibold'>
                        VP<br/>
                        Apax Partners <br/>
                        Prev. Goldman Sachs IB
                        </p>
                    </li>
                    <li className='flex flex-col'>
                        <Image src={Person6} width={228} alt="rasmda" />
                        <h2 className='text-xl font-semibold mb-10 mt-5'>
                        Mike Sacks<br/>
                        Advisor
                        </h2>
                        <p className='text-xl font-semibold'>
                        Director<br/>
                        Kingdon Capital<br/>
                        Prev. JP Morgan SSG
                        </p>
                    </li>
                </ul>
            </div>
        </div>
       
    </section>
  )
}

export default Team