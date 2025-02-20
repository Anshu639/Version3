import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./components/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import WhyUs from "./Pages/WhyUs";
import Events from "./Pages/Events";
import OurVision from "./Pages/OurVision";

/* Import your separate Header and Footer components */
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      {/* 1) Render the global Header at the top */}
      <Header />

      {/* 2) Define all your routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ourVision" element={<OurVision />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      {/* 3) Render the global Footer at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
