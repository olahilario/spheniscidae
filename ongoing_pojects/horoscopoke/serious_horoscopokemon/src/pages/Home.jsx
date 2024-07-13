import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import './Home.css'

function Home() {

  const [baths, setBaths] = useState();
  const [eggs, setEggs] = useState();
  const [tags, setTags] = useState()

  const handleBaths = (e) =>{
    setBaths(e.target.value)
    console.log(randomvalue)
  }

  const handleEggs = (e) =>{
    setEggs(e.target.value)
  }

  const handleTags = (e) =>{
    setTags(e.target.value)
  }
  

  return (
    <>
      <div id='container-home'>
      <h1 id='title'>.horoscopokemón</h1>
      <div id='div-form'>
        <form action="#" method='POST' className='form'>
          <label htmlFor="bath-number"><span>How many baths this current year?</span></label>
          <input type="number" name="bath-number" id="bath-number" placeholder='0'onChange={handleBaths}/>

          <label htmlFor="eggs"><span>How many eggs last night?</span></label>
          <input type="number" name="eggs" id="eggs" placeholder='0' onChange={handleEggs}/>

          <label htmlFor="tags"><span>Free tags inside your head!</span></label>
          <textarea name="tags" id="tags" placeholder='pizza eggs tags baths pizza poke' onChange={handleTags}></textarea>
        </form>

        </div>

      </div>
      <p id='profecy'>{baths} baths, {eggs} eggs and {tags}</p>
    </>
  )
}

export default Home
