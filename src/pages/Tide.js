import React from "react";
import { Link } from "react-router-dom";

const Tide = () => {
  return (
    <div className="show-container">
      <h2>Tide Podcast</h2>
      <p>Exploring mindset, growth, and personal development.</p>
      
      {/* <iframe 
        width="100%" height="315" 
        src="https://www.youtube.com/embed/YOUR_TIDE_YOUTUBE_ID" 
        title="Tide Podcast" 
        frameBorder="0" allowFullScreen>
      </iframe> */}

      <iframe 
        src="https://open.spotify.com/embed-podcast/show/4yb4XhLna0tl6TzEkBFzsp?si=0f9cec5d427a462d" 
        width="100%" height="152" frameBorder="0" allowTransparency="true" allow="encrypted-media">
      </iframe>

      <Link to="/shows" className="back-link">← Back to Shows</Link>
    </div>
  );
};

export default Tide;
