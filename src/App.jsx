// React router Dom library
import { Routes, Route } from "react-router-dom";

// Pages routes
import Signup from "./Pages/Signup";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
