export default function BackButton({backButtonHandler}) {
  return (
    <button style={backButton} onClick={backButtonHandler}>
      Back
    </button>
  );
}

const backButton = {
  position: 'absolute',
  top: '2%',
  left: '2%',
  borderRadius: '16px',
  border: '2px solid black',
  padding: '3px 20px',
  color: 'white',
  backgroundColor: 'black',
  fontWeight: 'bold',
};
