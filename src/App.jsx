import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar";
import Home from "./pages/Home";
import Footer from "./layout/footer";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
