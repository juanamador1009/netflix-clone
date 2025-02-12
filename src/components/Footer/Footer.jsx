import React from "react";
import "./Footer.css";
import caret_icon from "../../assets/caret_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer-title">
        Need help? Call <span className="phone-number">800 953 1430</span>
      </h3>
      <div className="footer-links">
        <ul>
          <li>Frequently Asked Questions</li>
          <li>Help Center</li>
          <li>Account</li>
          <li>Press</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Netflix Shop</li>
          <li>Redeem Gift Cards</li>
          <li>Buy Gift Cards</li>
          <li>Ways to Watch</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
          <li>Speed Test</li>
          <li>Legal Notices</li>
          <li>Only on Netflix</li>
        </ul>
      </div>
      <div className="btn language-btn">
        English <img src={caret_icon} alt="" />
      </div>
      <p className="country">Netflix México</p>
    </div>
  );
};

export default Footer;
