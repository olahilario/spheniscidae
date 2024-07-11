import React from 'react'
import './RandomBar.css'

function RandomBar() {
  return (
    <div>
       <div id='search-bar'>
        <img src='/src/assets/search_pokeball_icon.png' alt="search icon" />
        <input type="text" placeholder="Type anything you want. It doesn't matter, because your horoscopoke does!" />
        <button>GO!</button>
      </div>
      
    </div>
  )
}

export default RandomBar
