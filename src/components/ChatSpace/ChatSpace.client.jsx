import {useState} from 'react';
import {Image} from '@shopify/hydrogen';
import InputField from './components/InputField';
import WelcomeScreen from './screens/WelcomeScreen';
import RewardsClubScreen from './screens/RewardsClubScreen';
import CloseChatSpaceButton from './components/CloseChatSpaceButton';

import './styles.module.css';

export default function ChatSpace({
  chatInput,
  setChatInput,
  showChat,
  setShowChat,
}) {
  const [showRewardsClubScreen, setShowRewardsClubScreen] = useState(false);

  function rewardsClubHandler() {
    setShowRewardsClubScreen(true);
  }

  function inputHandler(e) {
    setChatInput(e.target.value);
  }

  function chatIconClickHandler() {
    setShowChat(true);
  }

  function closeChatSpaceHandler() {
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
        <div style={chatSpaceIcon} className="z-50">
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
          className="sm-max:w-[94vw] sm-max:h-[95vh] sm-max:z-30 sm:w-80 sm:h-96  z-50"
        >
          <CloseChatSpaceButton closeChatSpaceHandler={closeChatSpaceHandler} />
          {!showRewardsClubScreen ? (
            <WelcomeScreen rewardsClubHandler={rewardsClubHandler} />
          ) : (
            <RewardsClubScreen
              setShowRewardsClubScreen={setShowRewardsClubScreen}
            />
          )}

          <InputField inputHandler={inputHandler} chatInput={chatInput} />
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

const chatSpace = {
  // width: '300px',
  // height: '400px',
  border: '2x solid grey',
  borderRadius: '16px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  position: 'fixed',
  bottom: '3%',
  right: '3%',
  color: 'black',
};
