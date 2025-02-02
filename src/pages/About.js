import React from "react";
import "../styles/about_styles.css"; // Import CSS for styling
import familyPhoto from "../assetts/family-photo.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Mission & Story Section */}
      <section id="mission">
        <h2>Our Mission</h2>
        <p>
          DeeMedia was built with the purpose of bringing **raw, uncut, and unedited media**
          to the world. We aim to share real stories, inspire creativity, and help people 
          embrace their own unique journeys. Whether it's podcasting, coaching, or media production,
          we strive to help individuals create meaningful content and grow in both business and self-development.
        </p>
      </section>

      {/* About Dan Section */}
      <section id="about-dan">
        <h2>Meet Dan</h2>
        <div className="about-content">
          {/* Family Photo on Left */}
          <div className="about-image">
            <img src={familyPhoto} alt="Dan and family" />
          </div>

          {/* Dan's Story on Right */}
          <div className="about-text">
            <p>
              Dan, always a bit quirky, finally at the age of 33 was diagnosed with ADHD—
              and suddenly, everything made sense. Always drawn to the creative space, 
              he wasn’t the best drawer, but somehow his creative mind earned him high distinctions in school—
              before leaving early, haha.
            </p>
            <p>
              He started out coaching in the fitness industry as an early adopter of CrossFit, 
              then moved on to a plumbing apprenticeship. After **years of banging his head** against 
              the wall at trade school, he eventually became the **owner of a heating and cooling business**. 
              But Dan’s **fixations** over the years have taught him more than just business—
              they’ve shaped his journey of self-development, even leading him to **build this entire website from scratch**.
            </p>
            <p>
              A proud father to his **3 kids**, including **boy-girl twins**, and **2 stepkids**, Dan’s story is 
              one of resilience, creativity, and continuous learning. He brings this same passion 
              to DeeMedia, helping others find their own voice and creative spark.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
