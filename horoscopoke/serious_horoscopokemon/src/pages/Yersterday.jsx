import React, {useContext, useState} from 'react'
import styles from './Yersterday.module.css'

function Yersterday() {
  return (
    <div>
      <h1 className={styles.h1_yersterday}>.Yersterday</h1>
      <h3 className={styles.h3_yesterday}>Cronômetro regressivo que o usuário interrompe. Os milissegundos definem a consulta ao banco de dados</h3>
    </div>
  )
}

export default Yersterday
