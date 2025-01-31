import React from "react";
import { Link } from "react-router-dom";

const TheBookkeeper = () => {
  return (
    <div className="show-container">
    <h2>Coming Soon!</h2>
      <h2>The Bookkeeper Podcast</h2>
      <p>A casual chat about business, bookkeeping and everything admin that people forget about.</p>

      <iframe 
        width="100%" height="315" 
        src="https://www.youtube.com/embed/YOUR_BOOKKEEPER_YOUTUBE_ID" 
        title="The Bookkeeper Podcast" 
        frameBorder="0" allowFullScreen>
      </iframe>

      <iframe 
        src="https://open.spotify.com/embed-podcast/show/YOUR_BOOKKEEPER_SPOTIFY_ID" 
        width="100%" height="152" frameBorder="0" allowTransparency="true" allow="encrypted-media">
      </iframe>

      <Link to="/shows" className="back-link">← Back to Shows</Link>
    </div>
  );
};

export default TheBookkeeper;
