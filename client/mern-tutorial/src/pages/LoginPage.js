import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3700/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials:'include'
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Login successful', data);
      // handle successful login, e.g., save token
    } else {
      console.error('Login failed', data.message);
    }
  }

  return (
    <div>
      <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
