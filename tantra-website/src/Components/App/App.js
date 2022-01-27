import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from '../App/Home.js';
import Footer from '../Footer.js';
import AppBar from '../AppBar.js';
import Pricing from '../App/Pricing.js';
import Login from '../Login.js';
import Login2 from '../Login2.js';
import Register from '../Register.js';
import About from '../App/About.js';




function App() {
  return (
    <div>
      <header>
       <AppBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-2" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <Footer/>
      </footer>
    </div>


  );
}
export default App;