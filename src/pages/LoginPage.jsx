import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('nome de usuário ou senha inválidos');
    }
  };

  const passRegister = () => {
   return navigate('/register');
}; 

  return (
    
    <div className="login-page " >
        
      <h2 >To-Do List</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        
         <TextField
          id="outlined-password-input"
          label="usuario"
          type="usuario"
          autoComplete="current-password"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" type="submit">Entar</Button>
        
        <Button variant="text" onClick={passRegister}>Criar nova conata</Button>
      </form>
    </div>
  );
}

export default LoginPage;
