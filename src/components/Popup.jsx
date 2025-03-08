import { useState, useEffect } from "react";
import "./css/Popup.css";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    query: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Match the CSS transition time
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    handleClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`popup-box ${isClosing ? "popup-closing" : ""} ${
        isCollapsed ? "popup-collapsed" : ""
      }`}
    >
      <div className="popup-content">
        <div className="popup-header">
          <h3>
            Drop us a Query <span className="popup-green-dot">●</span>
          </h3>
          <button className="popup-close-btn" onClick={handleToggleCollapse}>
            {isCollapsed ? "▲" : "▼"}
          </button>
        </div>

        <div className="popup-body">
          <div className="popup-support-team">
            <div className="popup-support-avatars">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Support Agent 1"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Support Agent 2"
              />
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Support Agent 3"
              />
            </div>
          </div>

          <div className="popup-contact-info">
            <div className="popup-phone-icon-container">
              <div className="popup-phone-icon"></div>
            </div>
            <div className="popup-phone-details">
              <div className="popup-phone-number">+91 8869832559</div>
              <div className="popup-availability">
                Available 24x7 for your queries
              </div>
            </div>
          </div>

          <form className="popup-form" onSubmit={handleSubmit}>
            <div className="popup-form-group">
              <textarea
                name="query"
                className="popup-input"
                placeholder="Type your query here*"
                value={formData.query}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="popup-form-group">
              <label className="popup-label">Phone Number</label>
              <div className="popup-phone-input">
                <div className="popup-country-code">
                  <span>IN</span>
                  <span className="popup-dropdown-arrow">▼</span>
                </div>
                <div className="popup-prefix">+91</div>
                <input
                  type="tel"
                  className="popup-input"
                  name="phone"
                  placeholder="Enter Phone Number*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="popup-form-group">
              <label className="popup-label">Email Id</label>
              <input
                type="email"
                className="popup-input"
                name="email"
                placeholder="Enter your email*"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="popup-submit-btn">
              SUBMIT QUERY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
