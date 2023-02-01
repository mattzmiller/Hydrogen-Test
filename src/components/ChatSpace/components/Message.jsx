export default function Message({children}) {
  return (
    <p className="sm-max:text-center" style={welcomeMessage}>
      {children}
    </p>
  );
}

const welcomeMessage = {
  display: 'flex',
  width: '80%',
  height: '20px',
  margin: 'auto',
  marginBottom: '30px',
  justifyContent: 'center',
};
