import { useState } from "react";
import InputComponent from "../../Common Components/Input/Input";
import Button from "../../Common Components/Button/Button";
import { auth, db } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    console.log("Handling signup...");
    setLoading(true);
    if (password == confirmPassword && password.length >= 6 && fullName && email) {
      try {
        // Creating users account.
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("user", user);
        // Saving users Details.
        // eslint-disable-next-line no-undef
        await setDoc(doc(db, "users", user.uid), {
          name: fullName,
          email: user.email,
          uid: user.uid,
        });

        // Save data in Redux , call the redux action
        dispatch(
          setUser({
            name: fullName,
            email: user.email,
            uid: user.uid,
          })
        );
        toast.success("User has been created!");
        setLoading(false);
        navigate("/profile");
      } catch (e) {
        console.log("error", e);
        toast.error(e.message);
      }
    } else {
      //throw an error
      if (password != confirmPassword) {
        toast.error("Please Check Your Password and Confirm Password Matches!");
      } else if (password.length < 6) {
        toast.error("Please Check Your Password is more than 6 Digits long!");
      }
      setLoading(false);
    }
  };

  return (
    <>
      <InputComponent
        state={fullName}
        setState={setFullName}
        placeholder="Full Name"
        type="text"
        required={true}
      />

      <InputComponent
        state={email}
        setState={setEmail}
        placeholder="Email"
        type="text"
        required={true}
      />

      <InputComponent
        state={password}
        setState={setPassword}
        placeholder="Password"
        type="password"
        required={true}
      />

      <InputComponent
        state={confirmPassword}
        setState={setConfirmPassword}
        placeholder="Confirm Password"
        type="password"
        required={true}
      />

      <Button
        text={loading ? "Loading..." : "Signup"}
        disabled={loading}
        onClick={handleSignup}
      />
    </>
  );
};

export default SignupForm;
