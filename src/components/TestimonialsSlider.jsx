import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./css/TestimonialsSlider.css";

const testimonials = [
  {
    text: "Teachings of the great explore of truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, pleasure itself!",
    name: "Finlay Kirk",
    role: "Web Developer",
    image: `${process.env.PUBLIC_URL}/images/Ellipse 34.png`,
  },
  {
    text: "Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    name: "Dannette P. Cervantes",
    role: "Web Designer",
    image: `${process.env.PUBLIC_URL}/images/Ellipse 34.png`,
  },
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    name: "Clara R. Altman",
    role: "UI/UX Designer",
    image: `${process.env.PUBLIC_URL}/images/Ellipse 34.png`,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name: "John Doe",
    role: "Product Manager",
    image: `${process.env.PUBLIC_URL}/images/Ellipse 34.png`,
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    name: "Jane Smith",
    role: "Graphic Designer",
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
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>

      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 310}px)`,
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
