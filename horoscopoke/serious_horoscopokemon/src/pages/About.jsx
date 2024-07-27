import React, {useContext, useState, useEffect} from 'react'
import styles from './About.module.css'


function About() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [msg_login, setMsgLogin] = useState('Faça o seu login! =)')

  function handleUser(e){
    setUser(e.target.value)
  };

  function handlePassword(e){
    setPassword(e.target.value)
  };

  function exposePassword(){
    if (user === 'pikachu' && password === 'senhadopikachu'){
      setMsgLogin('Portal para alguma doidera')
    } else {
      setMsgLogin(`A senha do ${user} é ${password}! =(`)
    }
  }

  useEffect(()=>{
    localStorage.setItem('password', password)
    console.log(localStorage.getItem('password'))
  },[password])
  


  return (
    <div className={styles.container_global}>
      <div className={styles.container_about}>
        <h1 className={styles.titulo}>.wtf is horoscopokemón?</h1>
        <div className={styles.div_login}>
          <input type="text" className={styles.input_login} placeholder='login' value={user} onChange={handleUser}/>
          <input type="password" className= {styles.input_login} placeholder='password' value={password} onChange={handlePassword}/>
          <button className={styles.botao_login} onClick={exposePassword}>ENTER</button>
          <span className={styles.msg}>{msg_login}</span>
        </div>
          <div className={styles.container_about}>
            <p className={styles.about_h3}>Astrology is bushit. <strong>Horoscopokology</strong> rules the universe. It's really that simple! It's the only <strong>accurate way</strong> to know and <strong>predict</strong> what the hell is gonna happen to <strong> your tiny little life</strong> in this ever-expanding universe!</p>
          </div>


      </div>
    </div>
  )
}

export default About
