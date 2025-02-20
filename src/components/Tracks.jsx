import React from "react";
import Slider from "react-slick";
import { FaClock, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Tracks.css";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button className="slider-arrow prev-arrow" onClick={onClick}>
    <IoIosArrowBack />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slider-arrow next-arrow" onClick={onClick}>
    <IoIosArrowForward />
  </button>
);

const Tracks = () => {
  const events = [
    {
      id: 1,
      name: "Design Thinking Conference",
      venue: "New York Convention Center",
      organization: "Creative Minds",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      status: "Upcoming",
      image: `${process.env.PUBLIC_URL}/images/Group 337.png`,
    },
    {
      id: 2,
      name: "Full Stack Developer Summit",
      venue: "San Francisco Tech Hub",
      organization: "Tech Innovators",
      date: "April 5, 2024",
      time: "9:00 AM - 5:00 PM",
      status: "Registration Open",
      image: `${process.env.PUBLIC_URL}/images/Group 337.png`,
    },
    {
      id: 3,
      name: "AI & Machine Learning Expo",
      venue: "Los Angeles AI Center",
      organization: "AI Global",
      date: "May 20, 2024",
      time: "11:00 AM - 6:00 PM",
      status: "Registration Close",
      image: `${process.env.PUBLIC_URL}/images/Group 337.png`,
    },
    {
      id: 4,
      name: "Cybersecurity Awareness ",
      venue: "Washington DC Cyber Lab",
      organization: "CyberSafe Community",
      date: "June 10, 2024",
      time: "1:00 PM - 7:00 PM",
      status: "Upcoming",
      image: `${process.env.PUBLIC_URL}/images/Group 337.png`,
    },
    {
      id: 5,
      name: "Entrepreneurship Bootcamp",
      venue: "Chicago Business Hub",
      organization: "Startup Nation",
      date: "July 8, 2024",
      time: "10:00 AM - 3:00 PM",
      status: "Registration Open",
      image: `${process.env.PUBLIC_URL}/images/Group 337.png`,
    },
  ];

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 events at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="tracks">
      {/* Header Section */}
      <div className="tracks-header">
        <h2>Upcoming Events</h2>
        <p>Discover exciting events and stay ahead.</p>
      </div>

      {/* Event Slider */}
      <Slider {...sliderSettings} className="course-slider">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-content">
              <h3>{event.name}</h3>
              <div className="event-meta">
                <span>
                  <FaMapMarkerAlt className="meta-icon" />
                  {event.venue}
                </span>
                <span>
                  <FaBuilding className="meta-icon" />
                  {event.organization}
                </span>
              </div>
              <div className="event-date-time">
                <span>{event.date}</span>
                <span>{event.time}</span>
              </div>
              <div
                className={`event-status ${event.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <FaClock className="status-icon" />
                {event.status}
              </div>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Tracks;
