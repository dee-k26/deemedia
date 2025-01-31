import React from "react";
import { Link } from "react-router-dom";

const Tidy = () => {
  return (
    <div className="show-container">
    <h2>Coming Soon!</h2>
      <h2>Tidy Podcast</h2>
      <p>A raw, unscripted, unedited comedy show with Dan & Tys. Live shows coming soon.</p>

      <iframe 
        width="100%" height="315" 
        src="https://www.youtube.com/embed/YOUR_TIDY_YOUTUBE_ID" 
        title="Tidy Podcast" 
        frameBorder="0" allowFullScreen>
      </iframe>

      <iframe 
        src="https://open.spotify.com/embed-podcast/show/YOUR_TIDY_SPOTIFY_ID" 
        width="100%" height="152" frameBorder="0" allowTransparency="true" allow="encrypted-media">
      </iframe>

      <Link to="/shows" className="back-link">← Back to Shows</Link>
    </div>
  );
};

export default Tidy;
