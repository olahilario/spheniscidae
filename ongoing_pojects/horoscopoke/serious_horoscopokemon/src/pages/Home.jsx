import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './Home.css'

function Home() {
  

  return (
    <div id='container-home'>
     <h1>.horoscopokemón</h1>
     <div id='div-form'>
      <form action="#" method='POST' class='form'>
        <label htmlFor="bath-number"><span>How many baths this semester?</span></label>
        <input type="number" name="bath-number" id="bath-number" placeholder='0'/>

        <label htmlFor="eggs"><span>How many eggs last night?</span></label>
        <input type="number" name="eggs" id="eggs" placeholder='0'/>

        <label htmlFor="tags"><span>Free tags inside your head!</span></label>
        <textarea name="tags" id="tags" placeholder='pizza eggs tags baths pizza poke'></textarea>


      </form>
      </div>

    </div>
  )
}

export default Home
