import React, {useEffect, useState, useRef} from 'react'
import styles from './Yersterday.module.css'
import TheDog from '../components/TheDog';

function Yersterday() {

  const [isTicking, setIsTicking] = useState(false);
  const [elapsed, setElapsed] = useState(420);
  const [changeDogImage, setChangeDogImage] = useState(true)
  const intervalRef = useRef(null);
  const startTimeFromRef = useRef(0);

  useEffect(()=>{
    if (isTicking){
      intervalRef.current = setInterval(()=>{
        setElapsed(Date.now() - startTimeFromRef.current)
      },1)
    }
    return()=>{
      clearInterval(intervalRef.current)
    }
  }
  ,[isTicking])

  function start(){
    setIsTicking(true);
    startTimeFromRef.current = Date.now() - elapsed
  }

  function stop(){
    setIsTicking(false)
    setChangeDogImage(isTicking && changeDogImage ? false : true)
    console.log(elapsed)
  }

  function reset(){
    setIsTicking(false)
    setElapsed(0)
  }

  function format(){
    let hours = padZero(Math.floor((elapsed/(1000*60*60))));
    let minutes = padZero(Math.floor(elapsed/(1000*60) % 60));
    let seconds = padZero(Math.floor(43 - (elapsed/1000) % 60));
    let milliseconds = padZeros(Math.abs(840 - (elapsed % 1000)));

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  function padZero(number){
    return (number < 10 ? '0' : '') + number;
  }

  function padZeros(number){
    if (number < 10){
      return '00' + number;
  } else if (number >=10 && number < 100){
    return '0' + number;
  }else {
    return number;
  }}

  return (
    <div className={styles.global_container}>
      <div className={styles.container}>
        <h1 className={styles.h1_yersterday}>.Yersterday</h1>

        <div className={styles.clock_container}>
          <span className={styles.display}>{format()}</span>
          <div className={styles.div_buttons}>
            <button className={styles.btn_start}onClick={start}>start</button>
            <button className={styles.btn_stop}onClick={stop}>stop</button>
            <button className={styles.btn_reset}onClick={reset}>reset</button>
          </div>
        </div>

        <p className={styles.msg}>You were definitely like this in your past life!</p>
      <div className={styles.dog_container}>
        <TheDog 
        elapsed = {elapsed}
        isTicking = {isTicking}
        changeDogImage = {changeDogImage}
        />
      </div>

      </div>
    </div>
  )
}

export default Yersterday
