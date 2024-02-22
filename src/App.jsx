import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar";
// import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import MenuBar from "./layout/navbar/MenuBar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ResponsiveNavbar />
      <MenuBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
