import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './comp/navbar.jsx'
import Footer from './comp/footer.jsx'

import Gallery from './pages/gallery.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  )
}

export default App
