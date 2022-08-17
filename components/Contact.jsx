import Image from 'next/image'
import React from 'react'

function Contact() {
  return (
    <section className='max-w-8xl mx-auto px-4 lg:px-1.5 mt-16'>
        <div className='flex flex-col xl:flex-row items-start justify-between'>
            <div className='w-full text-center xl:text-left mb-10 xl:mb-0 xl:w-1/2'>
                <h1 className='font-medium text-6xl md:text-9xl lg:text-solution-xl mb-9'>
                Contact our
                sales team
                </h1>
                <p className='font-semibold text-3xl mb-6'>
                With Acretech AI you can:
                </p>
                <ul className='hidden md:flex items-center lg:items-start flex-col gap-3'>
                    <li className='flex items-center gap-3'>
                        <Image src={require("../public/assets/check.png")} alt="check" />
                        <p className='font-extrabold text-xl md:text-3xl'>
                        Drill with Accuracy and Confidence
                        </p>
                    </li>
                    <li className='flex items-center gap-3'>
                        <Image src={require("../public/assets/check.png")} alt="check" />
                        <p className='font-extrabold text-xl md:text-3xl'>
                        Beat Competitors with Instant Reservoir Models
                        </p>
                    </li>
                    <li className='flex items-center gap-3'>
                        <Image src={require("../public/assets/check.png")} alt="check" />
                        <p  className='font-extrabold text-xl md:text-3xl'>
                        Increase Drilling Efficiency
                        </p>
                    </li>
                </ul>
            </div>

            {/* form */}
            <div className='bg-drill mx-auto w-11/12 md:w-[642px] md:h-[692px] p-8'>
                <Form />
            </div>
        </div>
    </section>
  )
}

function Form() {
    return (
      <form className=''>
        <h2 className='text-4xl font-medium mb-4 '>Get in touch</h2>
        <div className='flex flex-col mb-6'>
            <label className='font-semibold text-2xl mb-2' htmlFor="name">name</label>
            <input className='w-full border-none rounded-lg  outline-none py-3 px-4 bg-[#2e2e2e]' type="text" id='name' />
        </div>
        <div className='flex flex-col mb-6'>
            <label className='font-semibold text-2xl mb-2' htmlFor="work">Work email</label>
            <input className='w-full border-none rounded-lg  outline-none py-3 px-4 bg-[#2e2e2e]' type="text" id='work' />
        </div>
        <div className='flex flex-col mb-6'>
            <label className='font-semibold text-2xl mb-2' htmlFor="companie">Companie name</label>
            <input className='w-full border-none rounded-lg  outline-none py-3 px-4 bg-[#2e2e2e]' type="text" id='companie' />
        </div>
        <div className='flex flex-col mb-6 '>
            <label className='font-semibold text-2xl mb-2' htmlFor="phone">Phone</label>
            <input className='w-full border-none rounded-lg  outline-none py-3 px-4 bg-[#2e2e2e]' type="tel" id='phone' />
        </div>

        <button className='w-full bg-black py-3 mt-4' type='submit'>
            Submit
        </button>
      </form>
    )
  }

export default Contact
