import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/thefix_styles.css";

const TheFix = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    anecdote: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://deemedia-backend.onrender.com/send-anecdote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Anecdote submitted successfully!");
      setFormData({ name: "", email: "", anecdote: "", anonymous: false });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="show-container">
      <h2>Coming Soon!</h2>
      <h2>The Fix Podcast</h2>
      
        <strong>Raw, unedited conversations about Dan’s personal fixations.</strong>
        <p>
        Whether it's buying an **$80k wakeboarding boat on an apprentice wage**, 
        spending **$2k on podcasting equipment**, or diving headfirst into 
        **building this very website**, Dan’s fixations have taken him on a wild ride.
      </p>
      <p>
        The **YouTube channel** will follow Dan’s **most recent fixations**,
        like **golf, tech, and whatever new obsession takes over next**.
      </p>
      
      <iframe 
        width="100%" height="315" 
        src="https://www.youtube.com/embed/YOUR_FIX_YOUTUBE_ID" 
        title="The Fix Podcast" 
        frameBorder="0" allowFullScreen>
      </iframe>

      <iframe 
        src="https://open.spotify.com/embed-podcast/show/YOUR_FIX_SPOTIFY_ID" 
        width="100%" height="152" frameBorder="0" allowTransparency="true" allow="encrypted-media">
      </iframe>

      <section id="anecdote-form">
        <h2>Share Your Fixation</h2>
        <p>
          Do you have a wild fixation story? Submit your anecdote, and we might read it out on the podcast.
          You can choose to stay anonymous or share your name!
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name (optional):</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email (optional - for follow-up):</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label htmlFor="anecdote">Your Anecdote:</label>
          <textarea
            id="anecdote"
            name="anecdote"
            rows="5"
            value={formData.anecdote}
            onChange={handleChange}
            placeholder="Tell us your story..."
            required
          ></textarea>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="anonymous"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
            />
            <label htmlFor="anonymous">Submit Anonymously</label>
          </div>

          <button type="submit">Send Anecdote</button>
        </form>
      </section>

      <Link to="/shows" className="back-link">← Back to Shows</Link>
    </div>
  );
};

export default TheFix;
