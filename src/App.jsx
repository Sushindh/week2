import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Body from "./Body.jsx"
import SignUp from "./SignUp.jsx"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/Body" element={<Body />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
