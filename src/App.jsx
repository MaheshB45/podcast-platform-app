// React router Dom library
import { Routes, Route } from "react-router-dom";

// Pages routes
import SignUpPage from "./Pages/SignUpPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />}></Route>
      </Routes>
    </>
  )
}

export default App
