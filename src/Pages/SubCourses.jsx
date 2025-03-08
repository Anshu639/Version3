import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./css/SubCourses.css";
import powerBiImg from "../Images/powerBi.png";

function SubCourses() {
  const navigate = useNavigate();
  const { category, courseName } = useParams();

  // This function converts the courseName into a file-friendly name and triggers the download.
  const handleDownload = () => {
    // Decode and format the course name into a valid file name.
    const decodedCourseName = decodeURIComponent(courseName);
    // Replace spaces with underscores and remove non-alphanumeric characters
    const formattedName = decodedCourseName
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");
    const fileName = `${formattedName}.pdf`; // e.g., "power_bi_certification_training_course.pdf"
    const fileUrl = `/curriculum/${fileName}`; // Ensure the file exists in public/curriculum folder

    // Create a temporary link element to trigger the download.
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="course-container">
      {/* Dynamic Breadcrumb Navigation */}
      <div className="container-course py-4">
        <div className="breadcrumb">
          <span className="clickable" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="mx-2">&gt;</span>
          <span className="clickable" onClick={() => navigate("/courses")}>
            All Courses
          </span>
          <span className="mx-2">&gt;</span>
          <span className="clickable" onClick={() => navigate("/courses")}>
            {category}
          </span>
          <span className="mx-2">&gt;</span>
          <span>{decodeURIComponent(courseName)}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="title">{decodeURIComponent(courseName)}</h1>
        <div className="content-grid">
          {/* Left Column - Image */}
          <div className="image-section">
            <img
              src={powerBiImg}
              alt="Course Preview"
              className="course-image"
            />
          </div>
          {/* Right Column - Course Info */}
          <div className="info-section">
            <p className="description">
              Master the art of data visualization and analytics with Power BI
              course! Designed for beginners and aspiring data professionals,
              this immersive training covers data modeling, dashboard creation,
              DAX functions, and real-time data analysis. Through interactive
              sessions and live projects, participants will learn to transform
              raw data into meaningful insights, build dynamic reports, and make
              data-driven decisions with confidence. Join us to unlock the true
              potential of Power BI and take your analytical skills to
              the next level!
            </p>

            {/* Buttons */}
            <div className="button-group">
              <button
                className="enroll-button"
                onClick={() => navigate("/contactUs")}
              >
                Contact Now
              </button>
              <button className="curriculum-button" onClick={handleDownload}>
                Download Curriculum
              </button>
            </div>

            {/* Contact Info */}
            <div className="contact-card">
              <div className="text-lg font-semibold">Have queries? Ask us</div>
              <a href="tel:+918951755412" className="phone-number">
                +91 8869832559
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SubCourses;
