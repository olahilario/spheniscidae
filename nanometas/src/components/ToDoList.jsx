import React, { useState } from 'react'
import styles from './ToDoList.module.css'

function ToDoList() {


  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('')

  function handleNewTask(e){
    setNewTask(e.target.value)
  }

  function handleEnter(e){
    if (e.key == 'Enter'){
      setTasks(t => [...t, newTask])
      setNewTask('')
    }
  }

  function addTask(){
    if (newTask !== ''){
      setTasks(t => [...t, newTask])
      setNewTask('')
    }
  }

  function removeTask(index){
    setTasks(tasks.filter((task, i)=> i !==index ))
  }

  function moveUpTask(index){
    if (index !== 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }
  
  function moveDownTask(index){
    if (index !== tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks)
    }
  }

  function checkTask(e){
    e.target.checked ? e.target.parentElement.children[1].style.textDecoration = 'line-through'
    : e.target.parentElement.children[1].style.textDecoration = 'none';
  }

  function clickCheck(e){
    e.target.parentElement.children[1].style.textDecoration === 'line-through' ?
    e.target.parentElement.children[1].style.textDecoration = 'none' :
    e.target.parentElement.children[1].style.textDecoration = 'line-through'
    e.target.parentElement.children[0].checked  === true ?
    e.target.parentElement.children[0].checked = false :
    e.target.parentElement.children[0].checked = true;
  }

  function clickDoubt(e){
    const doubt = document.getElementById('doubt')
    if (doubt.innerHTML === 'DO<s>UBT</s>'){
      doubt.innerHTML = 'DOUBT'
    } else{
      doubt.innerHTML = 'DO<s>UBT</s>'
    }
  }


  return (

    <div className={styles.global}>

      <div className={styles.global_container}>
        
        <div className={styles.input_display}>
          <h1 className={styles.title}>JUST DO IT!</h1>

          <input type="text" className={styles.input_task} id='input_user'
          placeholder="any kind of stuff!" value={newTask} onChange={handleNewTask} onKeyDown={handleEnter}/>

          <button id="add-button" onClick={addTask}>➕</button>
        </div>

        <div className={styles.tasks}>
          <h1 className={styles.doing_stuff}>doing stuff</h1>
          <ol className={styles.order_list} id="order_list">
            {tasks.map((task, index)=>
            <li className={styles.task_list} key={index}>
              <div className={styles.div_task}>
                <input type="checkbox" onChange={checkTask} />
                <span className={styles.task_list} onClick={clickCheck}>{task}</span>
                <button className={styles.list_buttom} onClick={clickCheck}>✅</button>
                <button className={styles.list_buttom} onClick={()=>moveUpTask(index)}>🔼</button>
                <button className={styles.list_buttom} onClick={()=>removeTask(index)}>❌</button>
                <button className={styles.list_buttom} onClick={()=> moveDownTask(index)}>🔽</button>
              </div>
            </li>
)}
            
          </ol>
        </div>

        <footer className={styles.footer}>
          <h1 className={styles.text_footer} id='doubt' onClick={clickDoubt}>DO<s>UBT</s></h1>

        </footer>

      </div>

    </div>
  )
}

export default ToDoList
