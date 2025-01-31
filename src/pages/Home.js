import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Creative Stories & Meaningful Conversations</h2>
      <p>Your hub for podcasts, coaching, and media production.</p>
      <div className="hero-buttons">
        <motion.a href="/shows" className="btn"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Explore Shows
        </motion.a>
        <motion.a href="/contact" className="btn secondary"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Work with Us
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Home;
