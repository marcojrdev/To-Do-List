import React from 'react';
import { useTasks } from '../contexts/TaskContext';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function TaskItem({ task }) {
  const { removeTask, toggleTaskCompletion } = useTasks();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    
      <Button variant="contained" onClick={() => toggleTaskCompletion(task.id)}>
      {task.completed ? 'Desmarcar' : 'Concluir'}
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeTask(task.id)}>Excluir</Button>
    </div>
  );
}

export default TaskItem;
