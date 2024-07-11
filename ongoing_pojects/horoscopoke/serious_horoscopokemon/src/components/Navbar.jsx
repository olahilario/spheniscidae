import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function  Navbar() {
  return (
    <div>

      <nav>
        <ul>
          <Link to='/'><li>HOME</li></Link>
          <Link to='/About' ><li>WTF</li></Link>
          <Link to='/Today'><li>TODAY</li></Link>
          <Link to='/Yersterday'><li>YERSTERDAY</li></Link>
          <Link to='/Tomorrow'><li>TOMORROW</li></Link>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
