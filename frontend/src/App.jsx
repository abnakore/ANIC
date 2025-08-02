import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import HomePage from "./pages/test";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/calender" element={<Home />} /> */}
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  );
}

export default App;
