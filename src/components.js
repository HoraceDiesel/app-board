import React from 'react';

export function Message(props) {
  const { msg } = props;

    return (<div className="message">
    			<span>{msg.text}</span>
    			<button onClick={deleted}>X</button>
			</div>);

}

export function Records(props) {
  const { msgs, addMsg, deleteMsg } = props;

  const added = ( evennt ) => {
    const input = document.querySelector('.input-new');
    const text = input.value;
    if ( text.length > 0 ) {
      input.value = '';
      addMsg( text );
    }
  };

  const deleted = id => event => deleteMsg(id);

  return (
    <div className='msg'>
      <input type='text' placeholder='new msg... ' className="input-new" />
      <button onClick={added}>ADD</button>
      <hr />
        {msgs.map(msg => (
          <div key={msg.id} className='record'>
            <Message msg={msg} />
          </div>
        ))}
    </div>
  );
}