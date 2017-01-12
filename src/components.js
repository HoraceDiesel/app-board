import React from 'react';

export function Msg(props) {
  const { msg } = props;
    return <span>{msg.text}</span>;
}

export function Records(props) {
  const { msgs, deleteMsg, addMsg } = props;

  const added = (event) => {
    const input = document.querySelector('.input-msg');
    const text = input.value;

    if(text.length > 0) {
      input.value = '';
      addMsg(text);
    }
  };

  const deleted = id => event => deleteMsg(id);

  return (
    <div className='todo'>
      <input type='text'
             className='input-msg'
             placeholder='Add message'
             />
      <button onClick={added} >ADD</button>
      <ul>
        {msgs.map(eachMsg => (
          <li key={eachMsg.get('id')}>
            <Msg msg={eachMsg.toJS()} />
            <button onClick={deleted(eachMsg.get('id'))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}