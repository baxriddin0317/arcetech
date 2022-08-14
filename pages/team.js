import React from 'react'
import AppLayout from "../components/layoutes/AppLayout"
import Links from '../components/Links'
import Team from '../components/Team'
import Started from '../components/Started'

function team() {
  return (
    <AppLayout>
        <Team />
        <Links />
        <Started />
    </AppLayout>
  )
}

export default team