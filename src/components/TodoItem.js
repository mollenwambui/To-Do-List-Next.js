import React from 'react';
import './Tasks.css';

export default function TodoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={toggleTaskCompletion}
      />
      <span
        className="taskText"
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <button className="deleteButton" onClick={deleteTask}>&#128465;</button>
    </li>
  );
}
