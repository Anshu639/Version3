import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";
import Tracks from "./Tracks";
import TestimonialsSlider from "./TestimonialsSlider";
import TeamSection from "./TeamSection";
import Popup from "./Popup";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";

import img1 from "../Images/first.png";
import img2 from "../Images/second.png";
import img3 from "../Images/third.png";

const eventList = [
  { id: "training", name: "Hands-On Training & Certification Courses" },
  { id: "competitions", name: "Academic & Non-Academic Competitions" },
  { id: "tech-fairs", name: "Themed Events & Tech Fairs" },
  { id: "workshops", name: "Workshops & Expert-Led Sessions" },
  { id: "publishing", name: "Books & Newsletters Publishing" },
  { id: "camps", name: "Summer & Winter Camps" },
  { id: "community", name: "Community Engagement & Networking Initiatives" },
  { id: "awareness", name: "Awareness Programs" },
  { id: "custom-events", name: "Custom Events & Corporate Collaborations" },
];

// const sliderImages = [
//   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//   "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//   "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
// ];
const sliderImages = [img1, img2, img3];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = eventList.filter((event) =>
        event.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents([]);
    }
  };

  const handleSelectEvent = (event) => {
    setSearchTerm(event.name);
    setFilteredEvents([]);
    navigate(`/events#${event.id}`);
  };
  return (
    <div>
      {/* Hero Section */}
      <ImageSlider images={sliderImages} />
      <section className="hero">
        <div className="text-content">
          <h1 className="hero-heading">
            <span className="hero-span">Redefining </span>
            <br></br>
            Learning <br />
            <span className="hero-span">Beyond Boundaries</span>
          </h1>
          <p className="hero-paragraph">
            We specialize in organizing transformative events for schools,
            universities, organizations, and communities, fostering a culture of
            exploration, innovation, and growth. From expert-led workshops to
            competitive events, we create immersive learning experiences that
            inspire and empower individuals to go beyond boundaries. Partner
            with us to bring impactful learning to your community!
          </p>
          <div className="search-bar">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search for an event..."
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {filteredEvents.length > 0 && (
                <ul className="suggestions">
                  {filteredEvents.map((event) => (
                    <li key={event.id} onClick={() => handleSelectEvent(event)}>
                      {event.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="search-button">Continue</button>
          </div>
        </div>
        <div className="illustration">
          <img
            src={`${process.env.PUBLIC_URL}/images/log2.png`}
            alt="Illustration"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <div className="feature-icon">
            <img
              src={`${process.env.PUBLIC_URL}/images/online-test 1.png`}
              alt="Skill Icon"
            />
          </div>
          <div className="feature-text">
            <h3>Learn The Latest Skills</h3>
            <p>
              Master in-demand tech skills through expert videos and hands-on
              projects.
              <br />
              <Link className="links-banner" to="/courses">
                Our Courses
              </Link>
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img
              src={`${process.env.PUBLIC_URL}/images/exam 1.png`}
              alt="Career Icon"
            />
          </div>
          <div className="feature-text">
            <h3>Get Ready For a Career</h3>
            <p>
              Get resume help, interview prep, and connect with hiring partners.
              <br />
              <Link className="links-banner" to="/events">
                Our Events
              </Link>
            </p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img
              src={`${process.env.PUBLIC_URL}/images/certification 1.png`}
              alt="Certificate Icon"
            />
          </div>
          <div className="feature-text">
            <h3>Earn a Certificate</h3>
            <p>
              Gain recognized credentials that validate your expertise to
              employers.
              <br />
              <Link className="links-banner" to="/courses">
                Our Courses
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section>
        <Tracks />
      </section>

      {/* Learning Experience Section */}
      <section className="learning-experience">
        <div className="learning-content">
          <img
            src={`${process.env.PUBLIC_URL}/images/learnig-section.png`}
            alt="Learning Illustration"
            className="learning-illustration"
          />
        </div>
        <div className="learning-text">
          <h2>
            Premium <span>Learning</span> Experience
          </h2>
          <div className="learning-features">
            <div className="learning-feature-item">
              <div className="learning-feature-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/hearts 1.png`}
                  alt="Easily Accessible"
                />
              </div>
              <div>
                <h3>Easily Accessible</h3>
                <p>Learning Will Feel Very Comfortable With Courslab.</p>
              </div>
            </div>
            <div className="learning-feature-item">
              <div className="learning-feature-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/jigsaw 1.png`}
                  alt="Fun Learning"
                />
              </div>
              <div>
                <h3>Fun Learning</h3>
                <p>Learning Will Feel Very Comfortable With Courslab.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <TestimonialsSlider />
      </section>

      {/* Team Section */}
      <section>
        <TeamSection />
      </section>
      <Popup />
    </div>
  );
};

export default HomePage;
