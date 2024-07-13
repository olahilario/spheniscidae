import React, {useState, useContext} from 'react'
import './Tomorrow.css'

function Tomorrow() {
  return (
      <div id='container-tomorrow'>
        <div id='div-title'>
          <h1 className='title'>Tomorrow</h1>
        </div>
        <div id='div-desire-path'>
            <input type="text" id='desire' placeholder='Tell me your current desire!' />
            <button id='add-btn'>Add</button>
            <textarea name="path" id="path-desire" placeholder='What you gonna do!'></textarea>
        </div>

        <div id='div-msg'>

          <p id='msg-tomorrow'>So far this is an empty list. <br /> For each desire, a very strange <br />path for reach it!</p>
        </div>
        

        
     
        
      </div>

  )
}

export default Tomorrow
