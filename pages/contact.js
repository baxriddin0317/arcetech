import React from 'react'
import Contact from '../components/Contact'
import AppLayout from '../components/layoutes/AppLayout'
import Started from '../components/Started'

function contact() {
  return (
    <AppLayout>
      <Contact />
      <Started />
    </AppLayout>
  )
}

export default contact
