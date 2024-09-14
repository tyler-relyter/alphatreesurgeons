import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alphatree/about" element={<About />} />
        <Route path="/alphatree/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
