import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Task() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [textOne, setTextone] = useState('');



  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  const addTask = () => {
    axios.post('http://localhost:5000/tasks', { text , textOne }).then((response) => {
      setTasks([...tasks, response.data]);
      setText('');
      setTextone('');
    });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="text" value={textOne} onChange={(e) => setTextone(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.text} {task.textOne} <button onClick={() => deleteTask(task._id)}>Delete</button>          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
