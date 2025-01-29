import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DeeMedia</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#podcasts">Podcasts</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero">
        <h2>Welcome to DeeMedia</h2>
        <p>Your hub for creative shows, coaching, and storytelling.</p>
        <button onClick={() => alert("More coming soon!")}>Learn More</button>
      </section>

      <section id="about">
        <h2>About DeeMedia</h2>
        <p>
          DeeMedia is all about capturing stories, offering coaching, and creating amazing content. Follow us on our journey!
        </p>
      </section>

      <section id="podcasts">
        <h2>Our Shows</h2>
        <ul>
          <li>The Fix</li>
          <li>The Bookkeeper</li>
          <li>Tide</li>
        </ul>
      </section>

      <footer>
        <p>© 2025 DeeMedia | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
