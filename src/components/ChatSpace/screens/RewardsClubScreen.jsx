import {Image} from '@shopify/hydrogen';
import Message from '../components/Message';
import BackButton from '../components/BackButton';

import checkmarkImage from '../images/green-checkmark.png';

export default function RewardsClubScreen({
  setShowRewardsClubScreen,
  showRewardsConfirmation,
}) {
  function backButtonHandler() {
    setShowRewardsClubScreen(false);
  }
  return (
    <>
      <BackButton backButtonHandler={backButtonHandler} />
      {!showRewardsConfirmation ? (
        <div style={rewardsClubScreenContainer}>
          <Message>Please enter your email addres below:</Message>
        </div>
      ) : (
        <div style={rewardsClubConfirmationContainer}>
          <Message>You are signed up for rewards!</Message>
          <Image
            style={confirmationImage}
            src={checkmarkImage}
            width={50}
            height={50}
          />
          <button style={confirmationButton}>Confirm</button>
        </div>
      )}
    </>
  );
}

const rewardsClubScreenContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '25%',
  fontSize: '18px',
  textAlign: 'center',
};

const rewardsClubConfirmationContainer = {
  fontSize: '18px',
  textAlign: 'center',
  zIndex: 10,
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  borderRadius: '16px',
  position: 'absolute',
  paddingTop: '25%',
};

const confirmationImage = {
  margin: '20px auto',
};

const confirmationButton = {
  borderRadius: '16px',
  border: '2px solid black',
  padding: '3px 20px',
  color: 'white',
  backgroundColor: 'black',
  fontWeight: 'bold',
};
