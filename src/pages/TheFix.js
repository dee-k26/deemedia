import React from "react";
import { Link } from "react-router-dom";

const TheFix = () => {
  return (
    <div className="show-container">
    <h2>Coming Soon!</h2>
      <h2>The Fix Podcast</h2>
      <p>Dan’s deep dives into his latest fixations.</p>

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

      <Link to="/shows" className="back-link">← Back to Shows</Link>
    </div>
  );
};

export default TheFix;
