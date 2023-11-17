import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Kullanıcı adı ve şifreyi kontrol edin (geçici olarak "admin" ve "1234" olarak kabul edelim)
    if (username === 'admin' && password === '1234') {
      // Giriş başarılıysa, verileri local storage'e kaydedin
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      navigate('/form');
    } else {
      alert('Hatalı kullanıcı adı veya şifre');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı Adı" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" />
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
};

export default LoginForm;
