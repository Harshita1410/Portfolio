import React from "react";
import "./Contact.css"
function Contact() {
  return (
    <footer id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Please explore my social media links</p>
      <div className="social-links">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/harshita-verma-7aa45524a" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/_harshi_1404/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagram.png" alt="Instagram" />
        </a>
        <a href="mailto:harshitav1410@gmail.com">
          <img src="/assets/gmail.png" alt="Gmail" />
        </a>
      </div>
    </footer>
  );
}

export default Contact;
