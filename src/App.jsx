// React router Dom library
import { Routes, Route } from "react-router-dom";

// Pages routes
import SignUpPage from "./Pages/SignUpPage";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>

        <Routes>
          <Route path="/" element={<SignUpPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    
    </>
  );
}

export default App;
