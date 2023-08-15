import * as React from 'react';
import api from '../service/api';
export default function Login() {
  const [nome, setNome] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function logar() {
    try {
      const response = await api.post('/user/token', {
        user: nome,
        pass: password,
      });
      let token = response.data[0];
      console.log(token);
      localStorage.setItem('token', token.token);
      localStorage.setItem('id', token.id);
    } catch {
      console.log('oi');
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="nome"
        id=""
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="senha"
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => logar()}>entrar</button>
    </div>
  );
}
