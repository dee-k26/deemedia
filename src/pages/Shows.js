import React from "react";
import { Link } from "react-router-dom";
// import "../styles/shows_styles.css";

const shows = [
  {
    id: "the-fix",
    title: "The Fix",
    description:
      "Raw, unedited conversations about Dan’s personal fixations. From wakeboarding and buying an $80k boat on an apprentice wage, to deep-diving into podcasting and website building, The Fix is an open discussion on obsession, passion, and chasing interests head-on.",
    thumbnail: "/assets/the-fix-thumbnail.jpg",
  },
  {
    id: "the-bookkeeper",
    title: "The Bookkeeper",
    description:
      "A laid-back but insightful chat about the world of business, finance, and bookkeeping. Dan and Shannon bring their real-life experience to discuss the highs and lows of running a business, financial strategies, and the lessons they’ve learned along the way.",
    thumbnail: "/assets/the-bookkeeper-thumbnail.jpg",
  },
  {
    id: "tide",
    title: "Tide",
    description:
      "A mindset and mental well-being podcast exploring personal growth, life challenges, and maintaining balance. With a mix of humor and deep discussion, Tide helps listeners navigate life’s unpredictable waves with resilience and perspective.",
    thumbnail: "/assets/tide-thumbnail.jpg",
  },
  {
    id: "tidy",
    title: "Tidy",
    description:
      "A fresh take on organization, productivity, and efficiency in both business and life. From keeping finances in check to decluttering your workspace and mind, Tidy is your go-to for practical strategies and personal hacks.",
    thumbnail: "/assets/tidy-thumbnail.jpg",
  },
];

const Shows = () => {
  return (
    <div className="shows-container">
      <h1>Our Shows</h1>
      <p>Explore our collection of raw, insightful, and entertaining podcasts.</p>
      <div className="shows-grid">
        {shows.map((show) => (
          <div key={show.id} className="show-card">
            <img src={show.thumbnail} alt={show.title} className="show-thumbnail" />
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <Link to={`/shows/${show.id}`} className="show-link">Listen Now →</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
