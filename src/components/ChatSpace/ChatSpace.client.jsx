import {useState} from 'react';
import {Image} from '@shopify/hydrogen';

import './styles.module.css';

export default function ChatSpace() {
  const [chatInput, setChatInput] = useState('');
  const [showChat, setShowChat] = useState(false);

  function inputHandler(e) {
    setChatInput(e.target.value);
  }

  function chatIconClickHandler(e) {
    setShowChat(true);
  }

  function closeChatSpaceHandler(e) {
    setShowChat(false);
  }
  // track customer order - submit email and order number
  // reward club - are you interested to join the club, provide email
  // search for a product

  return (
    <>
      {showChat ? (
        <></>
      ) : (
        <div style={chatSpaceIcon}>
          <button onClick={chatIconClickHandler}>
            <Image
              className="animate-[bounce_2.7s_ease-in-out_infinite]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Circle-icons-chat.svg/1024px-Circle-icons-chat.svg.png"
              width="75px"
              height="75px"
              alt="chat-icon"
            />
          </button>
        </div>
      )}

      {showChat ? (
        <div
          style={chatSpace}
          className="sm-max:w-[94vw] sm-max:h-[95vh] sm:w-66 sm:h-96 sm-max:z-30"
        >
          <div style={chatSpaceExitBtn}>
            <button onClick={closeChatSpaceHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul style={messageContainer}>
            <li className="font">This is where the messages will appear</li>
          </ul>
          <form style={formStyling} action="" className="sm-max:w-[90vw]">
            <input
              className="border border-transparent rounded-full sm-max:w-full"
              style={inputField}
              onChange={inputHandler}
              value={chatInput}
              type="text"
            />
            <button
              style={sendBtn}
              className="inline-flex items-center justify-center w-full px-4 py-1 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
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
  marginRight: '10px',
  height: '32px',
};

const chatSpace = {
  // width: '300px',
  // height: '400px',
  border: '2x solid grey',
  borderRadius: '16px',
  backgroundColor: '#A5D0EA',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'end',
  position: 'fixed',
  bottom: '3%',
  right: '3%',
};

const formStyling = {
  margin: '6px',
  position: 'absolute',
  bottom: '1%',
  right: '0.5%',
  display: 'flex',
  justifyContent: 'space-between',
};

const chatSpaceExitBtn = {
  margin: '10px 12.5px',
};

const messageContainer = {
  margin: '10px 15px',
};

const sendBtn = {
  marginRight: '5px',
};
