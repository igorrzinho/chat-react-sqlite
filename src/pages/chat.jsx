import * as React from 'react';
import api from '../service/api';

export default function Chat() {
  const [id, setId] = React.useState(1);
  const [is, setIs] = React.useState({});
  const [data, setData] = React.useState([]);
  const [msg, setMsg] = React.useState('');
  const myId = localStorage.getItem('id');
  //const id = localStorage.getItem("id")
  async function messagens() {
    try {
      const response = await api.get(`/chat/selectMessageId/${id}`);
      //console.log(response.data);
      setData(response.data);
    } catch {
      console.log('oi');
    }
  }
  async function newMessage() {
    try {
      const response = await api.post('/chat/newMessage', {
        id1: myId,
        id2: is.id2,
        content: msg,
        idChat: id,
      });
      response;
    } catch {
      console.log('msg err');
    }
  }

  async function selectId() {
    let data;
    try {
      const response = await api.get(`/chat/selectId/${id}`);
      data = response.data[0];
      setIs(data);
      console.log(is);
    } catch {
      console.log('msg err');
    }
  }

  React.useEffect(() => {
    messagens();
  }, [data]);

  return (
    <div>
      <p>digite o id do chat</p>
      <input type="number" onChange={(e) => setId(e.target.value)} />
      <button onClick={() => messagens()}>submit</button>
      {data.map((e) => (
        // eslint-disable-next-line react/jsx-key
        <p
          key={e.id}
          className={e.de == myId ? `bg-sky-500/100` : `bg-sky-500/50`}
        >
          {e.content}
          {e.de == myId ? ' - eu' : ' - gu'}
        </p>
      ))}
      <label htmlFor="msg">digite sua mensagem</label>
      <input id="msg" onChange={(e) => setMsg(e.target.value)} type="text" />
      <button onClick={() => newMessage()}>enviar</button>
      <button onClick={() => selectId()}> ids</button>
    </div>
  );
}
