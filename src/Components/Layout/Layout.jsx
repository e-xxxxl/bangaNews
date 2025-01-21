import React from 'react'
import Navbar from '../Navbar/Navbar'
import Firstsection from '../Herosection/Firstsection'
import Politicalsection from '../Herosection/Politicalsection'
import TechSection from '../Herosection/Techsection'
import Businesssection from '../Herosection/Businesssection'
import Sportsection from '../Herosection/Sportsection'
import EntertainmentSection from '../Herosection/Entertainmentsection'
import HealthSection from '../Herosection/Healthsection'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Firstsection/>
    <Politicalsection/>
    <TechSection/>
    <Businesssection/>
    <Sportsection/>
    <EntertainmentSection/>
    <HealthSection/>
    </>
  )
}

export default Layout