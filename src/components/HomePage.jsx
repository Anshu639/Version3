import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/HomePage.css";
import Tracks from "./Tracks";
import TestimonialsSlider from "./TestimonialsSlider";
import TeamSection from "./TeamSection";

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
              Contrary to popular belief, Lorem Ipsum is not simply random
              text...
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
              Contrary to popular belief, Lorem Ipsum is not simply random
              text...
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
              Contrary to popular belief, Lorem Ipsum is not simply random
              text...
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

      {/* Newsletter Section */}
      <section>
        <div className="newsletter">
          <h2>Subscribe to our newsletter</h2>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="button">Send</button>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/orange-arrow.png`}
            alt="Arrow"
            className="arrow-icon-news"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/casual-life-3d-idea-lamp 1.png`}
            alt="Bulb"
            className="bulb-icon-news"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
