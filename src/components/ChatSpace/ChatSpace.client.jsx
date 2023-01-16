import {useState} from 'react';

export default function ChatSpace() {
  const [chatInput, setChatInput] = useState('');

  function inputHandler(e) {
    setChatInput(e.target.value);
  }

  return (
    <>
      <div style={chatSpaceIcon}>
        <button>
          <img
            className="animate-[bounce_2.7s_ease-in-out_infinite]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/1024px-Circle-icons-chat.svg.png"
            alt="chat-icon"
          />
        </button>
      </div>
      <div>
        <ul>
          <li>This is where the messages will appear</li>
        </ul>
        <form action="">
          <input
            style={inputField}
            onChange={inputHandler}
            value={chatInput}
            type="text"
          />
          <button className="border-rose-500" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

const chatSpaceIcon = {
  width: '75px',
  height: '75px',
  position: 'fixed',
  bottom: '3%',
  right: '3%',
};

const inputField = {
  color: 'black',
};

const sendIcon = {
  margin: '10px',
};
