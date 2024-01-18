import "./Button.css";

// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick, disabled, style }) => {
  return (
    <>
      <button onClick={onClick} className="custom-btn" disabled={disabled} style={{style}}>
        {text}
      </button>
    </>
  );
};

export default Button;
