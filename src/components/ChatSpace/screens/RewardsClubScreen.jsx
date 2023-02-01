import Message from '../components/Message';
import BackButton from '../components/BackButton';

export default function RewardsClubScreen({setShowRewardsClubScreen}) {
  function backButtonHandler() {
    setShowRewardsClubScreen(false);
  }
  return (
    <>
      <BackButton backButtonHandler={backButtonHandler} />
      <div style={rewardsClubScreenContainer}>
        <Message>Please enter your email addres below</Message>
      </div>
    </>
  );
}

const rewardsClubScreenContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
