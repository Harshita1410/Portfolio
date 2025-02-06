import React from "react";
import "./About.css";


const About = () => {
  return (
<section id="about" className="about">
  <p>About Me</p>
  <div className="about-content">
    <p>
      I am a third-year student pursuing a BTech in Computer Engineering at Bharati Vidyapeeth College of Engineering, Pune. Passionate about web development, I enjoy creating impactful, user-friendly websites and applications.
    </p>
    <h2>Skills</h2>
    <div className="skills-box">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <ul>
        <li>Python</li>
        <li>C++</li>
        <li>MySQL</li>
        <li>WordPress</li>
      </ul>
    </div>
  </div>
</section>

  
  );
};

export default About;
