import { useState } from "react";
import InputComponent from "../../Common Components/Input/Input";
import Button from "../../Common Components/Button/Button";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Slices/userSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate;
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log("Handling Login...");

    try {
      // Creating users account.
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();
      console.log("userData", userData);

      // Save data in Redux , call the redux action 
      dispatch(
        setUser({
          name: userData.name,
          email: user.email,
          uid: user.uid,
        })
      );

      navigate("/profile");
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <>
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

        <Button text={"Login"} onClick={handleLogin}/>
    </>
  )
}

export default LoginForm;