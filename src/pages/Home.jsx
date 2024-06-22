import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask';
import Button from '@mui/material/Button';

function Home() {
  const { logout } = useAuth();

  return (
    <div className="home-page">
      <header>
        <h1>Lista de Tarefas</h1>
        <Button variant="text" onClick={logout}>Sair</Button>
      </header>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default Home;
