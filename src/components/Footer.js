import React from "react";
import { WhatsApp, Facebook, Instagram, Twitter } from "@mui/icons-material";
import { TextField, Button } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <h3>Company Info</h3>
        <ul>
          <li>Company Name</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Customer Care</h3>
        <ul>
          <li>FAQ</li>
          <li>Shipping & Returns</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Health and Support</h3>
        <ul>
          <li>Health Resources</li>
          <li>Support Center</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Socials</h3>
        <ul className="social-icons">
          <li>
            <WhatsApp />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Twitter />
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-section">
          <p>@2010 - 2022 All Rights reserved</p>
          <div className="footer-links">
            <a href="#">Privacy Center</a>
            <a href="#">Cookies Policy</a>
            <a href="#">Manage Policy</a>
          </div>
        </div>
        <div className="footer-section">
          <div className="email-subscribe">
            <h3>Sign Up</h3>
            <div className="subscribe-container">
              <TextField
                placeholder="Your Email"
                variant="outlined"
                size="small"
                className="email-input"
              />
              <Button variant="contained" color="primary" className="subscribe-button">
                Subscribe
              </Button>
            </div>
            <h5>
              By clicking on subscribe, you are agreeing to the privacy and cookies policy
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
