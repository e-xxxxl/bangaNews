import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Firstsection from './Components/Herosection/Firstsection'
import Layout from './Components/Layout/Layout'
import { Routes,Route } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import LandingPage from './Components/Pages/LandingPage'
import AdminSignin from './Components/Admin/AdminAuth/AdminSignin'
import AdLayout from './Components/Admin/AdLayout/AdLayout'
import AdLandingPage from './Components/Admin/AdminPages/AdLandingPage'
import NewPost from './Components/Admin/NewPost/NewPost'
import PoliticsPage from './Components/Pages/PoliticsPage'
import BusinessPage from './Components/Pages/BusinessPage'
import TechnologyPage from './Components/Pages/TechnologyPage'
import SportsPage from './Components/Pages/SportsPage'

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/politics" element={<PoliticsPage/>}/>
        <Route path="/business" element={<BusinessPage/>}/>
        <Route path="/technology" element={<TechnologyPage/>}/>
        <Route path="/sports" element={<SportsPage/>}/>
        <Route path="*" element={<NotFound/>}/>

        {/* ADMIN ROUTES */}

        <Route path='/admin' element={<AdLayout/>}>
          <Route path='/admin/signin' element={<AdminSignin/>} />
          <Route path='/admin/dashboard' element={<AdLandingPage/>} />
          <Route path='/admin/create-post' element={<NewPost/>} />
       </Route>

      </Routes>
    </>
  )
}

export default App
