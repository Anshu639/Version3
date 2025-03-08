import React, { useState } from "react";
import "./css/FAQ.css";

const faqs = [
  {
    question: "What is Philomath Networks Pvt. Ltd.?",
    answer:
      "Philomath Networks Pvt. Ltd. is an organization dedicated to revolutionizing learning by focusing on individuals' interests and providing experiential learning opportunities beyond traditional teaching methods.",
  },
  {
    question: "What services does Philomath Networks offer?",
    answer:
      "We offer hands-on training and certification courses, academic and non-academic competitions, themed events and tech fairs, workshops and expert-led sessions, publishing of books and newsletters, seasonal camps, and community engagement initiatives.",
  },
  {
    question:
      "How does Philomath Networks differ from traditional educational institutions?",
    answer:
      "We emphasize experiential learning, focusing on what individuals are passionate about, rather than adhering to a rigid curriculum.",
  },
  {
    question: "What types of workshops are available?",
    answer:
      "Our workshops cover a wide range of subjects, including technology, crafts, emerging trends, AI, arts, leadership, and wellness.",
  },
  {
    question: "Are there any fees associated with your programs?",
    answer:
      "Fees vary depending on the specific program or event; detailed information is available on our website.",
  },
  {
    question: "Are your programs suitable for all age groups?",
    answer:
      "Yes, we design programs for school students, college students, and working professionals.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <h1 className="faq-main-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          <strong>Find Answers to Common Questions</strong>
        </p>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span className="faq-text">{faq.question}</span>
              <span
                className={`faq-toggle ${
                  activeIndex === index ? "rotate" : ""
                }`}
              >
                ▼
              </span>
            </div>
            <div
              className="faq-answer"
              style={{ display: activeIndex === index ? "block" : "none" }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
