import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/home_styles.css";


const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section 
        id="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Raw, Uncut, and Unedited Media</h1>
        <p>Authentic conversations, no filters, just real stories.</p>
        <div className="hero-buttons">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Link to="/shows" className="btn">Explore Shows</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
            <Link to="/contact" className="btn secondary">Work with Us</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about-home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About DeeMedia</h2>
        <p>DeeMedia is built for those who crave real, unfiltered media. Whether it's raw conversations, deep-dive explorations, or unedited stories, we bring authenticity to every piece of content.</p>
      </motion.section>

      {/* Featured Shows Section */}
      <motion.section id="shows-home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Our Shows</h2>
        <div className="show-grid">
          {[
            { name: "The Fix", desc: "Diving into fixations and personal obsessions.", path: "/shows/the-fix" },
            { name: "The Bookkeeper", desc: "A raw look at business and bookkeeping.", path: "/shows/the-bookkeeper" },
            { name: "Tide", desc: "Mindset, growth, and navigating life’s waves.", path: "/shows/tide" },
            { name: "Tidy", desc: "Comedy, banter, and unfiltered fun with Dan & Tys.", path: "/shows/tidy" }
          ].map((show, index) => (
            <motion.div key={index} className="show-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <h3>{show.name}</h3>
              <p>{show.desc}</p>
              <Link to={show.path}>Listen Now →</Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section id="services-home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Our Services</h2>
        <div className="service-grid">
          {["Podcast Production", "Coaching", "Media Consulting"].map((service, index) => (
            <motion.div key={index} className="service-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <h3>{service}</h3>
              <p>We provide expert guidance in {service.toLowerCase()}.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section id="testimonials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>What People Are Saying</h2>
        {["DeeMedia changed the way I see media. It’s real, raw, and exactly what we need.", "The Fix is hands down one of my favorite podcasts. So much honesty and depth in every episode."].map((testimonial, index) => (
          <motion.div key={index} className="testimonial" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <p>“{testimonial}”</p>
            <h4>- Listener</h4>
          </motion.div>
        ))}
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact-home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2>Get in Touch</h2>
        <p>Want to collaborate or start your own show? Let’s make it happen.</p>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link to="/contact" className="btn">Contact Us</Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
