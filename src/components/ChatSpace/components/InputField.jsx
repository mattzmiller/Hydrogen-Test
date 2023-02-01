export default function InputField({inputHandler, chatInput, sendHandler}) {
  return (
    <form
      onSubmit={sendHandler}
      style={formStyling}
      action=""
      className="sm-max:w-[90vw]"
    >
      <input
        className="border border-transparent rounded-full sm-max:w-full"
        style={inputField}
        onChange={inputHandler}
        value={chatInput}
        type="text"
      />
      <button
        style={sendBtn}
        className="inline-flex items-center justify-center w-full px-4 py-1 text-base font-bold leading-6 text-white border border-transparent rounded-full w-auto  focus:outline-none focus:ring-2 focus:ring-offset-2"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

const formStyling = {
  margin: '6px',
  position: 'absolute',
  bottom: '1%',
  right: '0.5%',
  display: 'flex',
  justifyContent: 'space-between',
};

const inputField = {
  color: 'black',
  marginRight: '10px',
  height: '32px',
  border: '2px solid black',
};

const sendBtn = {
  marginRight: '5px',
  backgroundColor: 'black',
};
