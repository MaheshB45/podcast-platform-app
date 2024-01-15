import { useState } from "react";
import NavBar from "../Components/Common Components/Navbar/NavBar";
import SignupForm from "../Components/SignupComponent/SignupForm/SignupForm";
import LoginForm from "../Components/SignupComponent/LoginForm/LoginForm";

const SignUpPage = () => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <NavBar />
      <div className="input-wrapper">
        {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
        {!flag ? <SignupForm /> : <LoginForm />}
        {!flag ? (
          <p style={{cursor: "pointer"}} onClick={() => setFlag(!flag)}>
            Already have an Account? Click here to Login.
          </p>
        ) : (
          <p style={{cursor: "pointer"}} onClick={() => setFlag(!flag)}>
           Dont have an Account? Click here to Signup.
          </p>
        )}
      </div>
    </>
  );
};

export default SignUpPage;
