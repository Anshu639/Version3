import React from "react";
import "./css/ourVision.css";
import Popup from "../components/Popup";

const OurVision = () => {
  return (
    <section className="our-vision">
      <div className="our-vision-container">
        <h2 className="our-vision-title">Our Vision</h2>
        <p className="our-vision-text">
          At Philomath Networks, we believe that learning has no boundaries.
          Each member of our team is a lifelong learner, just like you. We've
          all encountered the same challenge traditional academics often follow
          a rigid curriculum, leaving little room for exploration, creativity,
          or self-discovery. This structure can limit our realization of who we
          truly are, what excites us, and what we can achieve.
        </p>
        <p className="our-vision-text">
          We founded Philomath Network to break these boundaries—a dynamic
          community where learning goes beyond textbooks. Here, you can immerse
          yourself in diverse workshops, competitive events, and expert-led
          sessions, gaining hands-on experiences that inspire growth and
          innovation.
        </p>
        <p className="our-vision-text">
          Our mission is to cultivate thriving communities where passionate
          minds connect, collaborate, and exchange knowledge, bridging the gap
          between learners and industry experts. Join us on this journey, take
          that one step ahead, and unlock your full potential like never before!
        </p>
      </div>
      <Popup />
    </section>
  );
};

export default OurVision;
