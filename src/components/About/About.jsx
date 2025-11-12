import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <p>About Me</p>

      <div className="about-content">
        <p>
          I’m a third-year Computer Engineering student at Bharati Vidyapeeth
          College of Engineering, Pune. I’m passionate about crafting elegant
          and responsive web interfaces that provide smooth user experiences.
          With a strong foundation in front-end development, I enjoy turning
          ideas into visually appealing and functional websites.
        </p>

        <h2>Internship Experience</h2>
        <div className="internship-box">
          <h3>Web Development Intern — IELTS Leap</h3>
          <p className="internship-duration">
            February 2025 - August 2025 | Bangalore, India
          </p>
          <ul>
            <li>
              Developed the main website for the organization using WordPress,
              customizing themes and plugins for enhanced functionality.
            </li>
            <li>
              Managed layout design, content structure, and ensured a fully
              responsive user interface across all devices.
            </li>
            <li>
              Configured SEO tools and integrated analytics to improve site
              visibility and support data-driven marketing strategies.
            </li>
          </ul>
        </div>

        <h2>Skills</h2>
        <div className="skills-box">
          <ul>
            <li>HTML</li>
            <li>CSS (BootStrap)</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Django</li>
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
