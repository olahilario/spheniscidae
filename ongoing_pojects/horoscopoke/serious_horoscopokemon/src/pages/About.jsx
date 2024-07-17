import React, {useContext, useState} from 'react'
import styles from './About.module.css'


function About() {
  return (
    <>
      <h1 className={styles.titulo}>.wtf is horoscopokemón?</h1>
      <div className={styles.div_login}>
        <input type="text" className={styles.input_login} placeholder='Login' />
        <input type="password" className= {styles.input_login} placeholder='password' />
        <button className={styles.botao_login}>ENTER</button>
      </div>
        <div className={styles.container_about}>
          <p className={styles.about_h3}>Astrology is bushit. <strong>Horoscopokology</strong> rules the universe. It's really that simple! It's the only <strong>accurate way</strong> to know and <strong>predict</strong> what the hell is gonna happen to <strong> your tiny little life</strong> in this ever-expanding universe!</p>
        </div>
    </>
  )
}

export default About
