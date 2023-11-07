import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './Tasks.css'

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    setTasks([...tasks, { id: newId, text: newTask, isCompleted: false }]);
    setNewTask('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return ( <div>
    <input
      className='taskInput'
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Add a new task"
    />
    <button className='addButton' onClick={addTask}>
      Add Task
    </button>
      <ul>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            toggleTaskCompletion={() => toggleTaskCompletion(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}
