import { useState } from 'react';
import Modal from './Modal.jsx';

function Box() {
  const [tasks, setTasks] = useState([])
  const [task_name, setTaskName] = useState('')
  const [taskId, setTaskId] = useState()

  const addTask = (event) => {
    event.preventDefault();
    if (taskId) {
      let prevTask = [...tasks]
      let index = prevTask.findIndex((res) => res.id === taskId)
      prevTask[index].task_name = task_name
      setTasks(prevTask)
    } else {
      let id = new Date().getTime()
      setTasks(prevData => [...prevData, { task_name, id }]);
      setTaskName('');
    }

    const closeBtn = document.getElementById('close-button')
    closeBtn.click()
  }

  const deleteTodo = (id) => {
    let filteredData = tasks.filter(task_name => task_name.id !== id)
    setTasks(filteredData)
  }

  console.log(tasks, 'tasks');
  return (
    <div className="box">
      <h2>To-Do List</h2>
      <button className="add-task-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setTaskId()} >Add Task</button>
      <ol className="list" id='list'>
        {tasks.map((res) =>
          <div className='d-flex justify-content-between mb-2 mt-2'>
            <li>
              {res.task_name}
            </li>
            <div>
              <button className='btn-success btn mx-2 px-2' onClick={() => {
                setTaskName(res.task_name)
                setTaskId(res.id)
              }} data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
              <button className='btn-danger btn px-2' onClick={() => deleteTodo(res.id)} >Delete</button>
            </div>
          </div>
        )}
      </ol>
      <Modal task_name={task_name} taskIndex={taskId} setTaskName={setTaskName} addTask={addTask} />
    </div>
  );
}

export default Box;