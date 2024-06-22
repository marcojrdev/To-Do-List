import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register(username, password);
    if (success) {
      navigate('/login');
    } else {
      setError('O nome de usuário já existe');
    }
  };

  return (
    <div className="login-page">
      <h2>Cadastre-se</h2>
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
        <Button variant="contained" type="submit">Cadastre-se</Button>

        
      </form>
    </div>
  );
}

export default RegisterPage;
