import React from 'react';

export function Message(props) {
  const { msg } = props;

    return (<div className="message">
    			<span>{msg.text}</span>
    			<button>X</button>
			</div>);

}

export function Records(props) {
  const { msgs } = props;
  return (
    <div className='msg'>
      <input type='text' placeholder='new msg... ' />
      <button>ADD</button>
      <hr />
        {msgs.map(msg => (
          <div key={msg.id} className='record'>
            <Message msg={msg} />
          </div>
        ))}
    </div>
  );
}