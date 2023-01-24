export default function Message() {
  return (
    <p className="sm-max:text-center" style={welcomeMessage}>
      Hi there! How can I help you today?
    </p>
  );
}

const welcomeMessage = {
  display: 'flex',
  width: '80%',
  height: '20px',
  margin: '20px auto',
  justifyContent: 'center',
};
