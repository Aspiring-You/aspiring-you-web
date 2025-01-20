import React, { useState } from "react";
import "./Coursepage.css";
import Filters from "../../Components/Filters/Filters";
import CourseCard from "../../Components/Coursecard/Coursecard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import course from "../../Assets/CourseData/Course.json";

const Coursepage = () => {
  const [filteredCourses, setFilteredCourses] = useState(course);

  const handleFilterApply = (filters) => {
    const { category, price, level } = filters;

    const filtered = course.filter((course) => {
      const categoryMatch = category
        ? course.category &&
          course.category.toLowerCase() === category.toLowerCase()
        : true;
      const priceMatch =
        price === "free"
          ? course.price && course.price.toLowerCase() === "free"
          : price === "paid"
          ? course.price && course.price.toLowerCase() !== "free"
          : true;
      const levelMatch = level
        ? course.level && course.level.toLowerCase() === level.toLowerCase()
        : true;

      return categoryMatch && priceMatch && levelMatch;
    });

    setFilteredCourses(filtered);
  };

  // Recommended and New Courses based on filter
  const recommendedCourses = filteredCourses.slice(0, 5); // First 5 courses after filtering
  const newCourses = filteredCourses.slice(5, 10); // Next 5 courses after filtering

  return (
    <>
      <Header />
      <div className="courses-page">
        <div className="sidebar">
          <Filters onFilterApply={handleFilterApply} />
        </div>
        <div className="courses-content">
          <h2>Recommended Courses</h2>
          <div className="courses-grid">
            {recommendedCourses.length > 0 ? (
              recommendedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p>
                No courses match the selected filters in Recommended Courses.
              </p>
            )}
          </div>
          <h2>New Courses</h2>
          <div className="courses-grid">
            {newCourses.length > 0 ? (
              newCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p>No courses match the selected filters in New Courses.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coursepage;
