import Message from '../components/Message';

export default function WelcomeScreen({rewardsClubHandler}) {
  return (
    <div style={welcomeScreenContainer}>
      <Message>Hi there! How can I help you today?</Message>
      <ul style={messageContainer}>
        <li style={listItems}>
          <button
            className="hover:bg-black hover:text-white"
            style={welcomeButtons}
          >
            Track Order
          </button>
        </li>
        <li style={listItems}>
          <button
            onClick={rewardsClubHandler}
            className="hover:bg-black hover:text-white"
            style={welcomeButtons}
          >
            Rewards Club
          </button>
        </li>
        <li style={listItems}>
          <button
            className="hover:bg-black hover:text-white"
            style={welcomeButtons}
          >
            Search for a product
          </button>
        </li>
      </ul>
    </div>
  );
}

const welcomeScreenContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const messageContainer = {
  margin: '30px auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const listItems = {
  margin: '0 auto',
};

const welcomeButtons = {
  border: '1.5px solid black',
  borderRadius: '24px',
  padding: '7px 20px',
  marginTop: '20px',
};
