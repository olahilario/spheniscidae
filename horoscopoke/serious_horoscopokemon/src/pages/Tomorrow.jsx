import React, {useState, useEffect, useContext} from 'react'
import { SearchContext } from '../contexts/searchContext'
import styles from './Tomorrow.module.css'
import TheActivity from '../components/TheActivity';



function Tomorrow() {

  const [currentDesire, setCurrentDesire] = useState('')
  const [count, setCount] = useState(0)
  const {anything, setAnything, notanything, setNotAnything, eggs, baths, tags, activity, setActivity} = useContext(SearchContext);
  let msg = document.getElementById('msg-tomorrow');

  const handleCurrentDesire = (e)=>{
    setCurrentDesire(e.target.value)
  }

  const patchDesire = ()=>{
    if (currentDesire !== ''){
      setCount(c=> c+1)
    }
  }
  
  return (
      <div className={styles.container_tomorrow}>
        <div className={styles.div_title}>
          <h1 className={styles.title}>.Tomorrow</h1>
        </div>
        <div className={styles.div_desire_path}>
            <input type="text" className={styles.desire} placeholder='Tell me your current desire!' value={currentDesire} onChange={handleCurrentDesire} />
            <button className={styles.add_btn} onClick={patchDesire}>_patch</button>
            <textarea name="path" className={styles.path_desire} placeholder='What you gonna do!' value={count >= 1 ? `GOAL #${count} -> ${currentDesire}: ${eggs} eggs is nuts, fellow! Don't do this kind of bullshit! From now on here's what's you gonna do: ${activity}! This is the way!`: 'Tell me your goal and map out your path to achieve it'}></textarea>
        </div>

        <div className={styles.div_msg}>

          <p className={styles.msg_tomorrow}>We can patch just one goal each time! For each desire, <br />a very strange path for reach it! {notanything}</p>
        </div>

        <TheActivity
        count = {count}
        />
        

        
     
        
      </div>

  )
}

export default Tomorrow
