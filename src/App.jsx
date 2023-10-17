import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Navbar from './components/navbar'
import Sections from './components/sections'

function App() {
  
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });}

  return (


    <div>
      <Navbar  handleNavLinkClick={handleNavLinkClick}/>
      <Sections/>
    </div>
  )
}

export default App
