import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./css/TestimonialsSlider.css";

const testimonials = [
  {
    text: "The team has been a game-changer for us! Their expertise, dedication, and innovative approach have made a huge impact. Truly a reliable and professional team!",
    name: "Harsh Mathur",
    role: "Founder, Zelax Global Solutions",
    image: `${process.env.PUBLIC_URL}/images/harshMathur.jpeg`,
  },
  {
    text: "An exceptional team! Their meticulous planning and flawless execution of events exceeded our expectations. Highly recommended for quality and reliability!",
    name: "Khushboo Bhurat",
    role: "IPR Expert",
    image: `${process.env.PUBLIC_URL}/images/KhushbooBhurat.jpeg`,
  },
  {
    text: "A fantastic experience working with them! Their innovative strategies and problem-solving skills stand out. Looking forward to more collaborations!",
    name: "Harsh Chaudhary",
    role: "Senior Network Engineer",
    image: `${process.env.PUBLIC_URL}/images/HarshChaudhary.jpeg`,
  },
  {
    text: "Brings creativity and precision to every project. Their dedication and professionalism make them a go-to team for impactful results!",
    name: "Swapnil Bhurat",
    role: "Head, Mechanical Dept",
    image: `${process.env.PUBLIC_URL}/images/SwapnilBhurat.jpeg`,
  },
  {
    text: "Highly impressed by their ability to turn ideas into reality! Their expertise in executing projects and organizing events is truly commendable.",
    name: "Richa Sharma",
    role: "Assistant Consultant, TCS",
    image: `${process.env.PUBLIC_URL}/images/Ellipse 34.png`,
  },
  {
    text: "A powerhouse of talent! Their structured approach, attention to detail, and commitment to excellence make them a pleasure to work with.",
    name: "Vikas Kumar Singh",
    role: "Specialist Master, Deloitte",
    image: `${process.env.PUBLIC_URL}/images/Ellipse 34.png`,
  },
];

const useResponsiveCards = () => {
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return cardsToShow;
};

const TestimonialsSlider = () => {
  const cardsToShow = useResponsiveCards();
  const [currentIndex, setCurrentIndex] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleNext = () => {
    if (currentIndex < testimonials.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-slider" {...swipeHandlers}>
      <div className="testimonials-header">
        <h2>What Client's Say</h2>
        <p>
          Hear from our happy clients! Their experiences speak volumes about our
          commitment to excellence.
        </p>
      </div>

      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            width: `${(testimonials.length / cardsToShow) * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-info">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="next-button" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {Array.from({
          length: testimonials.length - cardsToShow + 1,
        }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSlider;
