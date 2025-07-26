import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import HomePage from "./pages/test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/calender" element={<Home />} />
        <Route path="/donate" element={<Home />} />
        {/* !!! Remove it */}
        <Route path="/test" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
