import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Links */}
      <div className="footer-links">
        <div className="footer-column">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Site Logo"
              className="footer-logo"
            />
          </a>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/Ourvision">Our Vision</a>
            </li>
            <li>
              <a href="/whyus">Why Us</a>
            </li>
            <li>
              <a href="/clients">Our Clients</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/newsletter">Newsletter</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contactUs">Work with Us?</a>
            </li>
            <li>
              <a href="/brochure">Brochure</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <a href="tel:+916396268840">+91 6396268840</a>
            </li>
            <li>
              <a href="mailto:philomathnetworks@gmail.com">
                philomathnetworks@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=One+Step+Ahead,+Clock+Tower,+Dehradun"
                target="_blank"
                rel="noopener noreferrer"
              >
                One Step Ahead, Clock Tower, Dehradun
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>BookStore All Right Reserved, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
