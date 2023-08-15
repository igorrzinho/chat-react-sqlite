import * as React from 'react';
import api from '../service/api';
export default function Cad() {
  const [nome, setNome] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function AddUser() {
    try {
      const response = await api.post('/user/newUser', {
        user: nome,
        pass: password,
      });
      let token = response.data[0];
      console.log(token);
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
      <button onClick={() => AddUser()}>criar</button>
    </div>
  );
}
