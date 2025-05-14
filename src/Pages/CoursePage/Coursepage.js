import React, { useState } from "react";
import "./Coursepage.css";
import Filters from "../../Components/Filters/Filters";
import CourseCard from "../../Components/Coursecard/Coursecard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import courseData from "../../Assets/CourseData/Course.json";

const Coursepage = () => {
  const { recommendedCourses, newCourses } = courseData;

  const [filteredRecommended, setFilteredRecommended] =
    useState(recommendedCourses);
  const [filteredNew, setFilteredNew] = useState(newCourses);

  const handleFilterApply = (filters) => {
    const { category, price, level } = filters;

    // Filtering logic for recommended courses
    const filteredRec = recommendedCourses.filter((course) => {
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

    // Filtering logic for new courses
    const filteredNewCourses = newCourses.filter((course) => {
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

    setFilteredRecommended(filteredRec);
    setFilteredNew(filteredNewCourses);
  };

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
            {filteredRecommended.length > 0 ? (
              filteredRecommended.map((course) => (
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
            {filteredNew.length > 0 ? (
              filteredNew.map((course) => (
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
