import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Uploader from "./Pages/uploader";


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/main" exact element={<Main/>} />
          <Route path="/upload" exact element={<Uploader/>} />
        </Routes>
    </>
  )
}

export default App