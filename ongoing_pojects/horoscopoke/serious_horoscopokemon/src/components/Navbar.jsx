import React from 'react'
import { Link } from 'react-router-dom'
import styles from'./Navbar.module.css'


function  Navbar() {
  return (
    <div>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
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
