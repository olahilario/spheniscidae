import React, {useState, useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import RandomBar from './components/RandomBar.jsx'

import './App.css'


function App() {

  
  return (
    <div id='container-app'>

      <Navbar />
      <RandomBar />

      <Outlet />

    </div>
  )
}

export default App
