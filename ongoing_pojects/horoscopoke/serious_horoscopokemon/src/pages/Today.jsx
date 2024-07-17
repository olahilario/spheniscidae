import React, {useState, useEffect} from 'react'
import styles from './Today.module.css'

function Today() {

  const [time, setTime] = useState(new Date());

  useEffect(()=> {
    const interval = setInterval(()=>{
      setTime(new Date())
    }, 1)
    return ()=>{
      clearInterval(interval);
    }
  }, [])

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();

    const meridiem = hours >=12 ? 'PM' : 'AM'
    hours = hours % 12 || 12

    return `${fixOneZero(hours)}:${fixOneZero(minutes)}:${fixOneZero(seconds)}:${fixTwoZeros(milliseconds)} ${meridiem}`
  }

  function fixOneZero(number){
    return (number < 10 ? '0' : '') + number
  }

  function fixTwoZeros(number){
    if (number < 10){
      return '00' + number
    }else if(number < 100){
      return '0' + number
    } else{
      return number
    }
  }



  return (
      <div className={styles.container_clock}>
        <span className={styles.title_today}>.{time.getTime()}</span>
        <span className={styles.msg2}>Horário universal!</span>
        <span className={styles.msg3}>Horário humano!</span>
        <span className={styles.h3_today}>{formatTime()}</span>
        <span className={styles.msg}>"Choose" the right time to click wisely!</span>
      </div>
)
}

export default Today
