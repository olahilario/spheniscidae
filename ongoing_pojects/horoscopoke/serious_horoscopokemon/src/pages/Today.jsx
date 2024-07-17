import React, {useState, useContext} from 'react'
import styles from './Today.module.css'

function Today() {
  return (
    <div className={styles.container_clock}>
      <p className={styles.title_today}>.Today</p>
      <p className={styles.h3_today}>07:48:15:47:357</p>
    </div>
)
}

export default Today
