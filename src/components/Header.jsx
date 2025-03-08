import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Added FiPhone
import { FaCaretDown } from "react-icons/fa";

import "./css/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeDropdowns = () => {
    setIsEventsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const handleAboutClick = () => {
    navigate("/about");
    closeDropdowns();
  };

  const handleEventsClick = () => {
    navigate("/events");
    closeDropdowns();
  };

  const eventsDropdownItems = [
    { title: "Training & Certification", link: "/events#training" },
    { title: "Competitions", link: "/events#competitions" },
    { title: "Tech Fairs", link: "/events#tech-fairs" },
    { title: "Workshops", link: "/events#workshops" },
    { title: "Publishing", link: "/events#publishing" },
    { title: "Summer & Winter Camps", link: "/events#camps" },
    { title: "Community Engagement", link: "/events#community" },
    { title: "Awareness Programs", link: "/events#awareness" },
    { title: "Corporate Events", link: "/events#corporate" },
  ];

  const aboutDropdownItems = [
    { title: "Our Vision", link: "/ourVision" },
    { title: "Why Us?", link: "/whyus" },
    { title: "Our Clients", link: "/about#clients" },
  ];

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Book Store"
          />
        </div>
        {/* Enquiry Phone Section */}
        {/* <div className="enquiry">
          <FiPhone className="phone-icon" />
          <span className="phone-number">+1 (234) 567-8900</span>
        </div> */}
      </div>

      <button
        className={`hamburger ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
        style={{ color: isOpen ? "white" : "black" }}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`nav-container ${isOpen ? "open" : ""}`}>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>

            {/* About Us Dropdown */}
            <li
              className={`nav-item ${isAboutDropdownOpen ? "open" : ""}`}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={closeDropdowns}
            >
              <span className="nav-links" onClick={handleAboutClick}>
                About Us <FaCaretDown className="dropdown-icon" />
              </span>
              {isAboutDropdownOpen && (
                <ul className="dropdown-menu">
                  {aboutDropdownItems.map((item, index) => (
                    <li key={index} className="nav-sub-item">
                      <NavLink to={item.link} onClick={closeDropdowns}>
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMenu}
              >
                Courses
              </NavLink>
            </li>
            {/* Events Dropdown */}
            <li
              className={`nav-item ${isEventsDropdownOpen ? "open" : ""}`}
              onMouseEnter={() => setIsEventsDropdownOpen(true)}
              onMouseLeave={closeDropdowns}
            >
              <span className="nav-links" onClick={handleEventsClick}>
                Events <FaCaretDown className="dropdown-icon" />
              </span>
              {isEventsDropdownOpen && (
                <ul className="dropdown-menu">
                  {eventsDropdownItems.map((item, index) => (
                    <li key={index} className="nav-sub-item">
                      <NavLink to={item.link} onClick={closeDropdowns}>
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="#"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMenu}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactUs"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <button className="sign-in-btn">
          <NavLink className="btn-clr" to="/login">
            Sign In
          </NavLink>
        </button>
      </div>
    </header>
  );
}
