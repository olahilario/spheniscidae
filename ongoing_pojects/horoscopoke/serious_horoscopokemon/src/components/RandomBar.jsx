import React, {useState, createContext} from 'react'
import './RandomBar.css'




function RandomBar() {

  const [anything, setAnything] = useState()
  const [notanything, setNotAnything] = useState()

  // const values = [anything, notanything]


  const handleAnything = (e)=>{
    setAnything(e.target.value)
    let words = anything.split(' ')
    setNotAnything(words.filter((element, index) => index % 2 === 0 ? element : '').join(' '))
  }

  return (
    <div>
       <div id='search-bar'>
        <img src='/src/assets/search_pokeball_icon.png' alt="search icon" />
        <input type="text" id='randombar' onChange={handleAnything} placeholder="Type anything you want. It doesn't matter, because your horoscopoke does! Simple rule: Space controls what is true or false! ᕙ(⇀‸↼‶)ᕗ"/>
        <button>GO!</button>
      </div>

    </div>
  )
}

export default RandomBar
