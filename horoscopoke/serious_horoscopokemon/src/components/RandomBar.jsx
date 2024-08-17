import React, {useState, createContext, useContext} from 'react'
import { SearchContext } from '../contexts/searchContext'
import styles from './RandomBar.module.css'
import { Link } from 'react-router-dom'




function RandomBar() { 
  const { anything, setAnything, notanything, setNotAnything } = useContext(SearchContext)


  const handleAnything = (e)=>{
    setAnything(e.target.value)
    let words = anything.split(' ')
    setNotAnything(words.filter((element, index) => index % 2 === 0 ? element : '').join(' '))
  }

  return (
    <div>
       <div className={styles.search_bar}>
        <img src='/src/assets/search_pokeball_icon.png' className={styles.lupa} alt="search icon" />
        <input type="text" id='randombar' className={styles.randombar} onChange={handleAnything} placeholder="Type anything you want. It doesn't matter, because your horoscopoke does! Simple rule: Space controls what is true or false! ᕙ(⇀‸↼‶)ᕗ"/>
        <button><Link to='/Conclusion'><span>GO!</span></Link></button>
      </div>

    </div>
  )
}

export default RandomBar
