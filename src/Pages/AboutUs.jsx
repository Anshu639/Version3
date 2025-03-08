import React from "react";
import "./css/aboutUs.css";
import aboutImage from "../Images/aboutUs.png"; // Update the path based on your project
import Popup from "../components/Popup";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        {/* Left Side - Image */}
        <div className="about-us-image">
          <img src={aboutImage} alt="About Us" />
        </div>

        {/* Right Side - Text Content */}
        <div className="about-us-content">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-text">
            <strong>
              Philomath Networks Pvt. Ltd. Redefining Learning Beyond Boundaries
            </strong>
          </p>
          <p className="about-us-text">
            At Philomath Networks Pvt. Ltd., we are on a mission to
            revolutionize learning by shifting the focus from conventional
            teaching methods to what individuals truly want to explore. Our goal
            is to build a globally recognized platform that fosters curiosity,
            innovation, and experiential learning.
          </p>
          <p className="about-us-text">
            We specialize in workshops, competitive events, expert-led sessions,
            and immersive learning experiences covering diverse domains
            including technology, lifestyle, crafts, and emerging trends. We
            bridge the gap between academia and industry by offering hands-on
            training and awareness sessions that go beyond traditional
            classrooms, empowering individuals to think, create, and grow.
          </p>
          <p className="about-us-text">
            Our audience includes passionate learners of all ages students,
            professionals, and enthusiasts who seek personal and professional
            growth. Through our vibrant community, we connect like minded
            individuals, encouraging collaboration, exploration, and unlocking
            one’s full potential.
          </p>
          <p className="about-us-text">
            Guided by our ethos, " Redefining Learning Beyond Boundaries,"
            Philomath Networks is committed to providing enlightening,
            visionary, and transformative knowledge at every step. Join us on
            this journey of discovery, where learning knows no limits, and
            innovation leads the way!
          </p>
        </div>
      </div>
      <Popup />
    </section>
  );
};

export default AboutUs;
