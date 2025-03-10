import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/Events.css";
import trainingImg from "../Images/training.png";
import competitionImg from "../Images/academic.png";
import techFairsImg from "../Images/techFairs.png";
import workshopImg from "../Images/workshop.png";
import publishingImg from "../Images/publishing.png";
import campsImg from "../Images/camps.png";
import communityImg from "../Images/community.png";
import awarenessImg from "../Images/awareness.png";
import customImg from "../Images/custom.png";
import Popup from "../components/Popup";

const Events = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100, // Adjust offset to make it properly visible
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="container">
      <h1 className="mainHeading">What We Do</h1>

      {/* Section 1 */}
      <div className="section" id="training">
        <div className="image-container">
          <img src={trainingImg} alt="Training Event" />
        </div>
        <div className="content-container">
          <h2>Hands-On Training & Certification Courses</h2>
          <p>
            Experience practical, skill-based learning through our hands-on
            training and certification programs designed to bridge the gap
            between theory and real-world application. Led by industry experts,
            these courses equip learners with in-demand skills, ensuring they
            stay ahead in an evolving landscape. Whether you're a student,
            professional, or enthusiast, our structured modules help you master
            new concepts, validate expertise, and gain a competitive edge.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section reverse" id="competitions">
        <div className="content-container">
          <h2>Academic & Non-Academic Competitions</h2>
          <p>
            Step into the arena of knowledge, creativity, and problem-solving
            with our academic and non-academic competitions. From STEM Olympiads
            and hackathons to business challenges and creative contests, we
            encourage participants to think critically, innovate, and push their
            limits. These events cultivate a spirit of healthy competition while
            fostering teamwork, strategic thinking, and personal growth.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
        <div className="image-container">
          <img src={competitionImg} alt="Competitions Event" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="section" id="tech-fairs">
        <div className="image-container">
          <img src={techFairsImg} alt="Tech Fairs Event" />
        </div>
        <div className="content-container">
          <h2>Themed Events & Tech Fairs</h2>
          <p>
            Explore the latest trends, breakthroughs, and innovations in our
            themed events and tech fairs, where learning meets excitement.
            Engage in interactive exhibits, expert talks, and live
            demonstrations covering everything from emerging technologies to
            sustainability solutions. Whether you're a tech enthusiast,
            researcher, or industry leader, these events offer inspiration,
            networking opportunities, and hands-on experiences in a dynamic
            environment.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section reverse" id="workshops">
        <div className="content-container">
          <h2>Workshops & Expert-Led Sessions</h2>
          <p>
            Dive deep into specialized learning experiences with our workshops
            and expert-led sessions. These interactive and engaging events are
            tailored for curious minds eager to explore new disciplines, refine
            skills, and gain industry insights. Covering a wide range of
            subjects—from AI and robotics to arts, leadership, and wellness—each
            session is designed to spark innovation and personal growth.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
        <div className="image-container">
          <img src={workshopImg} alt="Workshops Event" />
        </div>
      </div>

      {/* Section 5 */}
      <div className="section" id="publishing">
        <div className="image-container">
          <img src={publishingImg} alt="Publishing Event" />
        </div>
        <div className="content-container">
          <h2>Books & Newsletters Publishing</h2>
          <p>
            We empower thinkers, researchers, and learners by providing
            platforms for knowledge-sharing through publications. Our books &
            newsletters encapsulate valuable insights, emerging trends, and
            thought leadership across various fields. By documenting ideas and
            discoveries, we contribute to a growing community of
            knowledge-seekers and innovators.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
      </div>

      {/* Section 6 */}
      <div className="section reverse" id="camps">
        <div className="content-container">
          <h2>Summer & Winter Camps</h2>
          <p>
            Our seasonal camps are a blend of learning, adventure, and
            experiential education designed for students and professionals
            alike. Through interactive activities, project-based learning, and
            skill-building exercises, participants develop creativity, teamwork,
            and problem-solving abilities. Whether exploring STEM, leadership,
            entrepreneurship, or the arts, these camps provide a transformative
            experience beyond classrooms.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
        <div className="image-container">
          <img src={campsImg} alt="Camps Event" />
        </div>
      </div>

      {/* Section 7 */}
      <div className="section" id="community">
        <div className="image-container">
          <img src={communityImg} alt="Community Engagement Event" />
        </div>
        <div className="content-container">
          <h2>Community Engagement & Networking Initiatives</h2>
          <p>
            At Philomath Networks, we believe in the power of collaboration and
            shared learning. Our community engagement programs and networking
            initiatives connect learners, experts, and professionals through
            meetups, mentorship programs, and knowledge-sharing sessions. These
            platforms foster innovation, encourage meaningful discussions, and
            build long-lasting professional relationships.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
      </div>

      {/* Section 7 */}
      <div className="section reverse" id="camps">
        <div className="content-container">
          <h2>Awareness Programs</h2>
          <p>
            Our awareness programs are designed to educate, inspire, and drive
            action on critical global and societal issues. Covering diverse
            topics such as sustainability, digital safety, mental health,
            financial literacy, ethical AI, and social responsibility, these
            programs bring together experts, thought leaders, and changemakers
            to spark meaningful discussions. Through interactive sessions, panel
            talks, and community-driven initiatives, we aim to empower
            individuals with knowledge and awareness that lead to impactful
            change.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
        <div className="image-container">
          <img src={awarenessImg} alt="Camps Event" />
        </div>
      </div>

      {/* Section 8 */}
      <div className="section" id="community">
        <div className="image-container">
          <img src={customImg} alt="Community Engagement Event" />
        </div>
        <div className="content-container">
          <h2>Custom Events & Corporate Collaborations</h2>
          <p>
            Organizations, educational institutions, and communities can
            leverage our expertise to customize and organize events tailored to
            their needs. Whether it's corporate training, team-building
            programs, or specialized educational initiatives, we create
            impactful and seamless experiences.
          </p>
          <button className="event-button">
            <Link to="/price" className="btn-link">
              Brochure
            </Link>
          </button>
        </div>
      </div>
      <Popup />
    </div>
  );
};

export default Events;
