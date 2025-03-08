import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Award, Globe, Handshake } from "lucide-react";
import "./css/Courses.css";
import Popup from "../components/Popup";

function Courses() {
  const [activeTab, setActiveTab] = useState("ALL COURSES");
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const navigate = useNavigate();

  const tabs = [
    "ALL COURSES",
    "CERTIFICATION COURSES",
    "UNIVERSITY TOP COURSES",
    "SCHOOL TOP COURSES",
    "INDUSTRY COURSES",
  ];

  const categories = [
    { name: "All Courses", active: true },
    { name: "Power BI", active: false },
    { name: "Data Visualization", active: false },
    { name: "Data Science", active: false },
    { name: "Big Data", active: false },
    { name: "Cloud Computing", active: false },
    { name: "DevOps", active: false },
    { name: "Artificial Intelligence", active: false },
    { name: "Programming", active: false },
    { name: "Machine Learning", active: false },
    { name: "Others", active: false },
  ];

  const allCourses = [
    {
      title: "Power BI Certification Training Course:",
      description:
        "Master data visualization and business intelligence with Microsoft Power BI.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "Power BI",
      type: "CERTIFICATION COURSES",
    },
    {
      title: "Data Visualization Certification Training Course",
      description:
        "Learn the art of storytelling with data using top visualization tools.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "Data Visualization",
      type: "CERTIFICATION COURSES",
    },
    {
      title: "Data Science Certification Training Course",
      description:
        "Master data analysis, machine learning, and AI with hands-on projects.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "Data Science",
      type: "CERTIFICATION COURSES",
    },
    {
      title: "Big Data Certification Training Course",
      description:
        "Learn to process and analyze massive datasets using Hadoop, Spark, and more.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "Big Data",
      type: "CERTIFICATION COURSES",
    },
    {
      title: "Cloud Computing Certification Training Course",
      description:
        "Master cloud platforms like AWS, Azure, and Google Cloud for scalable solutions.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "Cloud Computing",
      type: "CERTIFICATION COURSES",
    },
    {
      title: "DevOps Certification Training Course",
      description:
        "Master CI/CD, automation, and cloud-native DevOps practices for efficient software delivery.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "DevOps",
      type: "CERTIFICATION COURSES",
    },
    {
      title: "Artificial Intelligence Certification Training Course",
      description:
        "Master AI concepts, deep learning, and neural networks for real-world applications.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "Artificial Intelligence",
      type: "CERTIFICATION COURSES",
    },
    {
      title: "Programming  Certification Training Course",
      description:
        "Enhance your coding skills with hands-on training in popular programming languages and frameworks.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "Programming",
      type: "CERTIFICATION COURSES",
    },
    {
      title: "Machine Learning Certification Training Course",
      description:
        "Learn the fundamentals and advanced concepts of Machine Learning with hands-on projects.",
      certificate: "Philomath Networks Certificate",
      schedule: "For Schools, Universities & Industries",
      partnership: "Partner with us",
      tag: "",
      viewDetails: true,
      category: "Machine Learning",
      type: "CERTIFICATION COURSES",
    },
  ];

  const handleViewDetails = (course) => {
    // Use encodeURIComponent to safely pass the course title in the URL
    navigate(`/subCourses/${course.category}/${encodeURIComponent(course.title)}`);
  };

  // Filter courses based on active category and tab
  const filteredCourses = allCourses.filter((course) => {
    const categoryMatch =
      activeCategory === "All Courses" || course.category === activeCategory;
    const tabMatch = activeTab === "ALL COURSES" || course.type === activeTab;
    return categoryMatch && tabMatch;
  });

  // Handle category click
  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="container-course py-4">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="mx-2">&gt;</span>
          <span>All Courses</span>
          {activeCategory !== "All Courses" && (
            <>
              <span className="mx-2">&gt;</span>
              <span>{activeCategory}</span>
            </>
          )}
          {activeTab !== "ALL COURSES" && (
            <>
              <span className="mx-2">&gt;</span>
              <span>
                {activeTab.charAt(0) + activeTab.slice(1).toLowerCase()}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="container-course hero-section">
        <h1 className="hero-title">Choose a category to find your course</h1>
        <p className="hero-subtitle">
          Explore industry and academia aligned courses from 1000+ categories
        </p>
      </div>

      {/* Categories */}
      <div className="container-course py-4">
        <div className="category-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-card ${
                category.name === activeCategory ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <h3
                className={`text-lg font-semibold ${
                  category.name === activeCategory
                    ? "text-white"
                    : "text-navy-800"
                }`}
              >
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="container-course py-8 mt-8">
        <div className="tab-navigation">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Course Features */}
      <div className="container-course py-2">
        <div className="course-features">
          <span>All Courses with</span>
          <span className="flex items-center">
            <span className="feature-check">✓</span> Life-time Access
          </span>
        </div>
      </div>

      <div className="container-course py-8">
        {filteredCourses.length === 0 ? (
          <div className="empty-state">
            <h3 className="empty-title">
              No courses found with the selected filters.
            </h3>
            <p className="empty-message">
              Please try another category or tab combination.
            </p>
          </div>
        ) : (
          <div className="course-grid">
            {filteredCourses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  {course.description && (
                    <p className="course-description">{course.description}</p>
                  )}
                  <br />

                  {course.certificate && (
                    <div className="course-meta">
                      <Award className="meta-icon" />
                      <span>{course.certificate}</span>
                    </div>
                  )}

                  {course.schedule && (
                    <div className="course-meta">
                      <Globe className="meta-icon" />
                      <span>{course.schedule}</span>
                    </div>
                  )}

                  {course.partnership && (
                    <div className="course-meta">
                      <Handshake className="meta-icon" />
                      <span>{course.partnership}</span>
                    </div>
                  )}

                  {course.viewDetails && (
                    <button
                      className="view-details-button"
                      onClick={() => handleViewDetails(course)}
                    >
                      View Course Details
                    </button>
                  )}
                  <br />
                  <br />
                  {course.viewDetails && (
                    <button className="view-details-button">Contact Us</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Popup />
    </div>
  );
}

export default Courses;
