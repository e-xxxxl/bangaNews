import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Firstsection from './Components/Herosection/Firstsection'
import Layout from './Components/Layout/Layout'
import { Routes,Route } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import LandingPage from './Components/Pages/LandingPage'
import AdminSignin from './Components/Admin/AdminAuth/AdminSignin'
import AdLayout from './Components/Admin/AdLayout/AdLayout'

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="*" element={<NotFound/>}/>

        {/* ADMIN ROUTES */}

        <Route path='/admin' element={<AdLayout/>}>
          
          <Route path='/admin/signin' element={<AdminSignin/>} />
         
      </Route>

      </Routes>
    </>
  )
}

export default App
