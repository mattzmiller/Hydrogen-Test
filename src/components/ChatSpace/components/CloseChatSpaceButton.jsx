export default function CloseChatSpaceButton({closeChatSpaceHandler}) {
  return (
    <div style={chatSpaceExitBtn}>
      <button onClick={closeChatSpaceHandler}>
        <svg
          color="black"
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
  );
}

const chatSpaceExitBtn = {
  margin: '10px 12.5px',
  alignSelf: 'end',
};
