import React from 'react';
import './footer.css';


function Footer() {
  return (
    <footer className="footer-container">
      {/* Left Column: Brand & Social Links */}
      <div className="footer-left">
        <div className="footer-brand">
          <span className="brand-badge">NEWS</span>
        </div>
        <div className="social-section">
          <p className="social-title">Follow us on</p>
          <div className="social-icons">
            <a href="#x" aria-label="X"><i className="fab fa-x-twitter"></i></a>
            <a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#whatsapp" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#threads" aria-label="Threads"><i className="fas fa-at"></i></a>
            <a href="#snapchat" aria-label="Snapchat"><i className="fab fa-snapchat-ghost"></i></a>
          </div>
        </div>
      </div>

      {/* Vertical Separator */}
      <div className="footer-divider"></div>

      {/* Right Column: Navigation Links & Copyright */}
      <div className="footer-right">
        {/* Top Links Row */}
        <div className="footer-links-row">
          <a href="#about">About Us</a>
          <a href="#advertise">Advertise</a>
          <a href="#epg">EPG Services</a>
          <a href="#channels">Channels</a>
          <a href="#disclaimer">Disclaimer</a>
          <a href="#feedback">Feedback</a>
          <a href="#investors">Investors</a>
          <a href="#redressals">Redressals</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#partner">Partner Content</a>
          <a href="#archives">Archives</a>
        </div>

        {/* Categories Row */}
        <div className="footer-categories-row">
          <span className="group-badge">Group Sites</span>
          <a href="#news">News</a>
          <a href="#hindi">Hindi</a>
          <a href="#business">Business</a>
          <a href="#movies">Movies</a>
          <a href="#cricket">Cricket</a>
          <a href="#food">Food</a>
          <a href="#tech">Tech</a>
          <a href="#education">Education</a>
          <a href="#health">Health</a>
          <a href="#lifestyle">Lifestyle</a>
          <a href="#marathi">Marathi</a>
          <a href="#rajasthan">Rajasthan</a>
          <a href="#mpcg">MPCG</a>
        </div>

        {/* Bottom Bar: Ethics & Copyright */}
        <div className="footer-bottom-bar">
          <p className="ethics-text">This website follows the DNPA Code of Ethics</p>
          <p className="copyright-text">© Copyright News Media Limited 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;