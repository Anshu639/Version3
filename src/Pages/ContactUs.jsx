import React, { useState } from "react";
import "./css/ContactUs.css";
import axios from "axios";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9002/contactus", values)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="Footer-container">
      <div className="form">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            We would love to hear from you. Contact us with any questions,
            comments, or suggestions!
          </p>
          <div className="info">
            <div className="information">
              <p>
                <GrLocation /> One Step Ahead, Clock Tower, Dehradun
              </p>
            </div>
            <div className="information">
              <p>
                <AiOutlineMail /> philomathnetworks@gmail.com
              </p>
            </div>
            <div className="information">
              <p>
                <BsTelephone /> +91 6396268840
              </p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com">
                <FaYoutube />
              </a>
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder=" "
                onChange={onChange}
                required
              />
              <label>Name</label>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder=" "
                onChange={onChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder=" "
                onChange={onChange}
                required
              />
              <label>Phone</label>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder=" "
                onChange={onChange}
                required
              ></textarea>
              <label>Message</label>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
