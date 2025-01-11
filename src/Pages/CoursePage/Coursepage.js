import React, { useState } from "react";
import "./Coursepage.css";
import Filters from "../../Components/Filters/Filters";
import CourseCard from "../../Components/Coursecard/Coursecard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import course from "../../Assets/CourseData/Course.json";

const Coursepage = () => {
  const [filteredCourses, setFilteredCourses] = useState(course);

  // Recommended and New Courses
  const recommendedCourses = course.slice(0, 5);
  const newCourses = course.slice(5, 10);

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

  return (
    <>
      <Header />
      <div className="courses-page">
        <div className="sidebar">
          <Filters onFilterApply={handleFilterApply} />
        </div>
        <div className="content">
          <h2>Recommended Courses</h2>
          <div className="courses-grid">
            {recommendedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <h2>New Courses</h2>
          <div className="courses-grid">
            {newCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {/* <h2>All Available Courses</h2>
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coursepage;
