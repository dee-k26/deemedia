import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Tide from "./pages/Tide";
import TheFix from "./pages/TheFix";
import TheBookkeeper from "./pages/TheBookkeeper";
import Tidy from "./pages/Tidy";  // Import the new show
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/tide" element={<Tide />} />
        <Route path="/shows/the-fix" element={<TheFix />} />
        <Route path="/shows/the-bookkeeper" element={<TheBookkeeper />} />
        <Route path="/shows/tidy" element={<Tidy />} />  {/* New Route */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
