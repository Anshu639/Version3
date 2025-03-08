import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Links */}
      <div className="footer-links">
        <div className="footer-column">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Site Logo"
              className="footer-logo"
            />
          </Link>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/Ourvision">Our Vision</Link>
            </li>
            <li>
              <Link to="/whyus">Why Us</Link>
            </li>
            <li>
              <Link to="/clients">Our Clients</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/newsletter">Newsletter</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contactUs">Work with Us?</Link>
            </li>
            <li>
              <Link to="/brochure">Brochure</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <a href="tel:+916396268840">+91 8869832559</a>
            </li>
            <li>
              <a href="mailto:info@philomathnetworks.com">
                info@philomathnetworks.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=One+Step+Ahead,+Clock+Tower,+Dehradun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Karberi Grant, Badowala Dehradun
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>All Right Reserved, Philomath Networks Pvt. Ltd @2025</p>
      </div>
    </footer>
  );
};

export default Footer;
