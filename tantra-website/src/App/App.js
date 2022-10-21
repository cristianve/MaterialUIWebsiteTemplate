import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "../Components/Footer.js";
import AppBar from "../Components/AppBar.js";

import Home from "./Pages/Home.js";

import Login from "./Pages/Account/Login.js";
import Register from "./Pages/Account/Register.js";
import PasswordReset from "./Pages/Account/PasswordReset";
import Account from "./Pages/Account/Account";

import Roadmap from "./Pages/Roadmap.js";
import About from "./Pages/About.js";
import Pricing from "./Pages/Pricing.js";
import ContantUs from "./Pages/ContactUs.js";
import Terms from "./Pages/Terms.js";
import Faq from "./Pages/FAQ.js"
import Search from "./Pages/Search.js";
import Products from "./Pages/Products.js";
import ErrorPage from "./Pages/ErrorPage.js";


function App() {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/account-settings" element={<Account />} />

        <Route path="/contact" element={<ContantUs />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/search" element={<Search />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
