import "./Button.css";

// eslint-disable-next-line react/prop-types
const Button = ({text, onClick }) => {
  return (
    <>
    
        <button onClick={onClick} className="custom-btn">{text}</button>
    </>
  )
}

export default Button