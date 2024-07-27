import React, {useState, useEffect, useContext} from 'react'
import { SearchContext } from '../contexts/searchContext'
import styles from './Tomorrow.module.css'



function Tomorrow() {

  const {anything, setAnything, notanything, setNotAnything} = useContext(SearchContext);
  let msg = document.getElementById('msg-tomorrow');

  

  return (
      <div className={styles.container_tomorrow}>
        <div className={styles.div_title}>
          <h1 className={styles.title}>.Tomorrow</h1>
        </div>
        <div className={styles.div_desire_path}>
            <input type="text" className={styles.desire} placeholder='Tell me your current desire!' />
            <button className={styles.add_btn}>_patch</button>
            <textarea name="path" className={styles.path_desire} placeholder='What you gonna do!' value={`What you gonna do: ${notanything}`}></textarea>
        </div>

        <div className={styles.div_msg}>

          <p className={styles.msg_tomorrow}>So far this is an empty list. <br /> For each desire, a very strange <br />path for reach it! {anything}</p>
        </div>
        

        
     
        
      </div>

  )
}

export default Tomorrow
