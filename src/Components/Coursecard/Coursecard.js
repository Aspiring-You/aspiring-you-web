import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h4>{course.title}</h4>
      <p>{course.description}</p>
      <p>
        <strong>Price:</strong> {course.price}
      </p>
      <p>
        <strong>Level:</strong> {course.level}
      </p>
    </div>
  );
};

export default CourseCard;
