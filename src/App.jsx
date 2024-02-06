import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Horizontalline from './components/Horizontalline';

function App() {
  return (
     <div className="h-screen bg-stone-950">
      <Navbar />
      <Horizontalline/>
    </div>
  );
}

export default App;
