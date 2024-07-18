import React, {useState, useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import RandomBar from './components/RandomBar.jsx'
import { SearchProvider } from './contexts/searchContext.jsx'

import styles from './App.module.css'


function App() {

  
  return (
    <div className={styles.container_app}>

      <Navbar />
      <RandomBar />

      <Outlet />

    </div>
  )
}

function AppWrapper() {
  return (
    <SearchProvider>
      <App />
    </SearchProvider>
  );
}
export default AppWrapper;