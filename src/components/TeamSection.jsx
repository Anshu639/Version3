import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./css/TeamSection.css";

const teamMembers = [
  {
    name: "Dhananjay Pant",
    title: "Data Analyst",
    description:
      "More than 3+ years of experience in Programming Languages like Java, Python, and strong Fundamental Skills of computer science with a Master's of Computer Application Degree.",
    subject: "Data Science",
    image: `${process.env.PUBLIC_URL}/images/teamMember1.jpg`,
    social: {
      instagram: "http://www.instagram.com/jaypant_08",
      linkedin: "https://www.linkedin.com/in/dhananjaypant",
    },
  },
  {
    name: "Nikita Rai",
    title: "Data Analyst",
    description:
      "I'm a data science post-graduate dedicated to transforming education through AI, analytics, and Power BI, empowering students and educators through hands-on workshops and training.",
    subject: "Data Science",
    image: `${process.env.PUBLIC_URL}/images/teamMember2.jpg`,
    social: {
      instagram: "https://www.instagram.com/nikitarai_16?igsh=OGw3NDF2NGV1aWc1",
      linkedin: "https://in.linkedin.com/in/nikita-rai-15918b251",
    },
  },
  {
    name: "Aakash Bhatt",
    title: "Web Developer",
    description:
      "Passionate Full Stack Developer with expertise in Java, MERN stack, and cloud technologies. Experienced in building dynamic web applications and IoT solutions.",
    subject: "Cyber Security with Cloud",
    image: `${process.env.PUBLIC_URL}/images/teamMember3.jpg`,
    social: {
      instagram: "https://www.instagram.com/aakashbhatt777",
      linkedin: "https://www.linkedin.com/in/aakash-bhatt-940452260",
    },
  },
  {
    name: "Akansha",
    title: "Data Analyst",
    description:
      "I'm a tech-driven educator with a passion for AI, data analytics, and Power BI, committed to making learning more interactive and insightful through hands-on workshops and training sessions.",
    subject: "Data Science",
    image: `${process.env.PUBLIC_URL}/images/teamMember4.jpg`,
    social: {
      instagram: "https://www.instagram.com/akansha_rathi_23",
      linkedin: "https://www.linkedin.com/in/akansha-rathi",
    },
  },
  {
    name: "Amit Nautiyal",
    title: "Data Analyst",
    description:
      "Experienced in programming and data science, with strong Java, Python, and SQL skills. Passionate about hands-on learning , problem-solving and building scalable applications.",
    subject: "AI/ML & Data Science",
    image: `${process.env.PUBLIC_URL}/images/teamMember5.jpg`,
    social: {
      instagram: "https://www.instagram.com/a_myth_07",
      linkedin: "https://www.linkedin.com/in/amit-nautiyal-86b03a1b9",
    },
  },
];

const useResponsiveSlides = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return slidesToShow;
};

const TeamSection = () => {
  const slidesToShow = useResponsiveSlides();
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleNext = () => {
    if (currentIndex < teamMembers.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="team-section" {...swipeHandlers}>
      <div className="team-header">
        <h2>Our Team</h2>
        <p className="para">
          Meet our skilled team, committed to innovation, excellence, and
          delivering great results.
        </p>
      </div>

      <div className="slider-container-team">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 350}px)`,
          }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <div className="team-content">
                <h3>{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-description">{member.description}</p>
                <div className="team-footer">
                  <p className="team-subject">{member.subject}</p>
                  <div className="team-social">
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {Array.from({
          length: teamMembers.length - slidesToShow + 1,
        }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
