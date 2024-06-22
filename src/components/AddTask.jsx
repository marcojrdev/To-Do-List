import React, { useState } from 'react';
import { useTasks } from '../contexts/TaskContext';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      title,
      description,
      completed: false,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default AddTask;
