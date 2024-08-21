import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Trade from './pages/Trade'
import Nopage from './pages/Nopage'

function App() {
  return (
    <div>
      <BrowserRouter basename='/techdivinelyapp/'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/trade' element={<Trade />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
