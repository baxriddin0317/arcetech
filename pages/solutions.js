import React from 'react'
import Btn from '../components/buttons/Btn'
import Cases from '../components/Cases'
import AppLayout from '../components/layoutes/AppLayout'
import Started from '../components/Started'

function solutions() {
  return (
    <AppLayout>

        <section className='max-w-4xl mx-auto text-center'>
            <h1 className='text-7xl md:text-8xl lg:text-solution-xl'>
            E&P’s &
            Supermajors.
            </h1>
            <p className='text-3xl my-10'>
            Empowering Exploration with AI Solutions 
            Drill with Accuracy and Confidence
            </p>

            <Btn href="/team">
            Contact Our Team
            </Btn>       
        </section>

        <Cases />

        <Started />
    </AppLayout>
  )
}

export default solutions