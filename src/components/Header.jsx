import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
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
    if (isOpen) toggleMenu();
  };

  const handleEventsClick = () => {
    navigate("/events");
    closeDropdowns();
    if (isOpen) toggleMenu();
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
          <NavLink to="/" onClick={toggleMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Book Store"
            />
          </NavLink>
        </div>
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
              onMouseEnter={() => {
                // Only open on hover if NOT mobile
                if (!isOpen) setIsAboutDropdownOpen(true);
              }}
              onMouseLeave={() => {
                // Only close on hover out if NOT mobile
                if (!isOpen) closeDropdowns();
              }}
            >
              {/* Put the text and caret side by side, but the caret is NOT inside the link */}
              <span className="nav-links">
                <NavLink
                  to="/about"
                  onClick={() => {
                    // In desktop mode, user can click to navigate
                    // In mobile mode (isOpen=true), we do handleAboutClick.
                    if (!isOpen) {
                      handleAboutClick();
                    } else {
                      // If you want tapping "About Us" in mobile to also navigate directly:
                      handleAboutClick();
                    }
                  }}
                >
                  About Us
                </NavLink>
                <FaCaretDown
                  className="dropdown-icon"
                  onClick={(e) => {
                    // Stop this click from navigating the NavLink
                    e.stopPropagation();
                    // Toggle dropdown in mobile mode
                    if (isOpen) {
                      setIsAboutDropdownOpen(!isAboutDropdownOpen);
                    }
                  }}
                />
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
              onMouseEnter={() => {
                if (!isOpen) setIsEventsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (!isOpen) closeDropdowns();
              }}
            >
              <span className="nav-links">
                <NavLink
                  to="/events"
                  onClick={() => {
                    if (!isOpen) {
                      handleEventsClick();
                    } else {
                      handleEventsClick();
                    }
                  }}
                >
                  Events
                </NavLink>
                <FaCaretDown
                  className="dropdown-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isOpen) {
                      setIsEventsDropdownOpen(!isEventsDropdownOpen);
                    }
                  }}
                />
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
