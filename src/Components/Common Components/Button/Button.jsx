import "./Button.css";

// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick, disabled }) => {
  return (
    <>
      <button onClick={onClick} className="custom-btn" disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default Button;
