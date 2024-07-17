import React, { useState } from 'react'
import styles from './Home.module.css'

function Home() {

  const [baths, setBaths] = useState();
  const [eggs, setEggs] = useState();
  const [tags, setTags] = useState()

  const handleBaths = (e) =>{
    setBaths(e.target.value)
  }

  const handleEggs = (e) =>{
    setEggs(e.target.value)
  }

  const handleTags = (e) =>{
    setTags(e.target.value)
  }
  

  return (
    <>
      <div className={styles.container_home}>
      <h1 className={styles.h1_home}>.horoscopokemón</h1>
      <div className={styles.div_form}>
        <form action="#" method='POST' className={styles.form_home}>
          <label htmlFor="bath-number" className={styles.label_home}><span>How many baths this current year?</span></label>
          <input type="number" name="bath-number" className={styles.input_form_home} placeholder='0'onChange={handleBaths} />

          <label htmlFor="eggs" className={styles.label_home}><span>How many eggs last night?</span></label>
          <input type="number" name="eggs" className={styles.input_form_home} placeholder='0' onChange={handleEggs}/>

          <label htmlFor="tags" className={styles.label_home}><span>Free tags inside your head!</span></label>
          <textarea name="tags" className={styles.tags} placeholder='pizza eggs tags baths pizza poke' onChange={handleTags}></textarea>
        </form>

        </div>

      </div>
      <p className={styles.profecy}>{baths} baths, {eggs} eggs and {tags}</p>
    </>
  )
}

export default Home
