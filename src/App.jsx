import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Firstsection from './Components/Herosection/Firstsection'
import Layout from './Components/Layout/Layout'
import { Routes,Route } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
