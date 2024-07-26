import Home from "./Pages/Home.jsx"
import SignUp from "./Pages/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="w-screen h-screen">
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/signup" element = {<SignUp />} />
          <Route path="/signin" element = {<SignIn />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
