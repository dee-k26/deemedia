import React from "react";
import { Link } from "react-router-dom";

const Shows = () => {
  return (
    <section id="shows">
      <h2>Our Shows</h2>
      <p>Explore our lineup of podcasts covering a variety of topics.</p>
      <ul className="show-list">
        <li><Link to="/shows/the-fix">The Fix</Link> - Deep dives into Dan’s latest fixations.</li>
        <li><Link to="/shows/the-bookkeeper">The Bookkeeper</Link> - A casual chat about business, bookkeeping, and finance.</li>
        <li><Link to="/shows/tide">Tide</Link> - Exploring mindset, growth, and personal development.</li>
        <li><Link to="/shows/tidy">Tidy</Link> - A comedy show with Dan & Tys.</li>
      </ul>
    </section>
  );
};

export default Shows;
