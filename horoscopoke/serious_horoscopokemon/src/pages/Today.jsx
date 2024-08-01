import React, {useState, useEffect, useRef} from 'react'
import styles from './Today.module.css'
import TheDog from '../components/TheDog';

function Today() {

  const [time, setTime] = useState(new Date());
  const [lapso, setLapso] = useState(1);

  useEffect(()=> {
    let interval = setInterval(()=>{
      setTime(new Date())
    }, lapso)
    return ()=>{
      clearInterval(interval);
    }
  }, [time])

  function stopTime(){
    setLapso(1000000)
  }

  function reStartTime(){
    setTime(new Date())
    setLapso(1)
  }

  function changeTime(){
    setTime(new Date())
    setLapso(500)
  }


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
    <div className={styles.container_global}>
      <div className={styles.container_clock}>
        <div>
          <span className={styles.msg2}>Horário universal!</span>
          <span className={styles.title_today} onClick={stopTime}>.{time.getTime()}</span>
        </div>
        <div>
          <span className={styles.h3_today} onClick={changeTime}>{formatTime()}</span>
          <span className={styles.msg3}>Horário humano!</span>
        </div>
      </div>

        <div>
          <button className={styles.botao} onClick={reStartTime}>BUTTON</button>
          <span className={styles.msg}>"Choose" the right time to click wisely!</span>
        </div>
    </div>
)
}

export default Today
