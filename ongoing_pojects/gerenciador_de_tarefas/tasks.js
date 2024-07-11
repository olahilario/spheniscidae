const addbtn = document.getElementById('add-button');
const task_list = document.getElementById('order-list');


function addTask(){
  const task = document.getElementById('input-task').value;
  if (task !== ''){
    const div_task = document.createElement('div')
    const item = document.createElement('li');
    const check = document.createElement('input');
    const upbtn = document.createElement('button');
    const downbtn = document.createElement('button');
    const removebtn = document.createElement('button');

    div_task.classList.add('div-task');
    task_list.append(div_task);

    item.classList.add('task-list');
    item.innerText = task;
    upbtn.textContent = '🔼';
    downbtn.textContent = '🔽';
    removebtn.textContent = '❌';
    check.type = 'checkbox';

    div_task.append(check, item, upbtn, downbtn, removebtn);

    document.getElementById('input-task').value = '';

    removebtn.addEventListener('click', deleteTask);

    check.addEventListener('change', checkTask)
    item.addEventListener('click', checkClick)



    // upbtn.addEventListener('click', getIndex);
    // upbtn.addEventListener('click', moveUp);

  }
}

function deleteTask(e){
  let removed = e.target.parentElement;
  removed.remove()
}

function checkTask(e){
  e.target.checked ? e.target.parentElement.children[1].style.textDecoration = 'line-through' : 
  e.target.parentElement.children[1].style.textDecoration = 'none'
}

function checkClick(e){
  e.target.parentElement.children[1].style.textDecoration === 'line-through' ? 
  e.target.parentElement.children[1].style.textDecoration = 'none':
  e.target.parentElement.children[1].style.textDecoration = 'line-through';
}

// const getIndex = (e) => {
//   const target_element = e.target;
//   const parent_target = target_element.parentNode;
//   const index_element = [].indexOf.call(parent_target.children, target_element);
//   console.log(index_element);
  
//   return index_element;
// }

// function moveUp(e){
//   const newtasklist = [...task_list];
//   [newtasklist[e.getIndex + 1], newtasklist[e.getIndex]] = [newtasklist[e.getIndex], newtasklist[e.getIndex + 1]]
//   console.log(newtasklist)
// }



addbtn.addEventListener('click', addTask)




