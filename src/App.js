import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
// import ContactForm from "./ContactForm";
import { motion } from "framer-motion"; // Import Framer Motion

function App() {
  return (
    <div className="App">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>DeeMedia | Podcasts, Coaching & Media</title>
        <meta name="description" content="DeeMedia brings you engaging podcasts, business coaching, and creative media services." />
        <meta name="keywords" content="Podcasts, Business Coaching, Media Production, DeeMedia, The Fix, The Bookkeeper, Tide" />
        <meta name="author" content="Dan Knight" />
        <meta property="og:title" content="DeeMedia" />
        <meta property="og:description" content="Discover The Fix, The Bookkeeper, and Tide podcast series by DeeMedia." />
        <meta property="og:url" content="https://deemedia.au" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <header className="App-header">
        <h1>DeeMedia</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#shows">Shows</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section with Animation */}
      <motion.section 
        id="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Creative Stories & Meaningful Conversations</h2>
        <p>Your hub for podcasts, coaching, and media production.</p>
        <div className="hero-buttons">
          <motion.a href="#shows" className="btn"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Explore Shows
          </motion.a>
          <motion.a href="#contact" className="btn secondary"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Work with Us
          </motion.a>
        </div>
      </motion.section>

      {/* Shows Section with Animated Cards */}
      <section id="shows">
        <h2>Our Shows</h2>
        <div className="show-list">
          {["The Fix", "The Bookkeeper", "Tide"].map((show, index) => (
            <motion.div 
              key={index} 
              className="show"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3>{show}</h3>
              <p>{show === "The Fix" ? "Dan's personal journey into fixations and deep dives." 
                  : show === "The Bookkeeper" ? "A laid-back chat about business, bookkeeping, and success."
                  : "Exploring mindset, growth, and the challenges of life."}
              </p>
              <a href="#">Listen Now</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      {/* <ContactForm /> */}

      {/* Footer */}
      <footer>
        <p>© 2025 DeeMedia | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
