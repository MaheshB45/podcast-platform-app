// React router Dom library
import { Routes, Route } from "react-router-dom";

// Pages routes
import SignUpPage from "./Pages/SignUpPage";
import Profile from "./Pages/Profile";
import CreateAPodcast from "./Pages/CreateAPodcast";

//React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { setUser } from "./Slices/userSlice";
import { useDispatch } from "react-redux";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", user.uid),
          (userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              dispatch(
                setUser({
                  name: userData.name,
                  email: user.email,
                  uid: user.uid,
                })
              );
            }
          },
          (error) => {
            console.error("Error fetching user data:", error);
          }
        );

        return () => {
          unsubscribeSnapshot();
        };
      }
    });

    return () => {
      unsubscribeAuth();
    };
  });

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-a-podcast" element={<CreateAPodcast />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
