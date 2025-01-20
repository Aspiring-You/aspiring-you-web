import React, { useState, useEffect } from "react";
import "./Filters.css";

const Filters = ({ onFilterApply }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 760);

  const [filters, setFilters] = useState({
    category: "",
    price: "",
    level: "",
  });

  // Update screen size state on window resize
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 760;
      setIsSmallScreen(smallScreen);
      if (!smallScreen) {
        setIsSidebarOpen(true); // Always show filters on large screens
      } else {
        setIsSidebarOpen(false); // Default to closed for small screens
      }
    };

    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    if (isSmallScreen) {
      setIsSidebarOpen(false); // Close sidebar after applying on small screens
    }
    onFilterApply(filters);
  };

  return (
    <div className="filters-container">
      {/* Hamburger Icon for Small Screens */}
      {isSmallScreen && (
        <button
          className="hamburger-icon"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          &#9776; Filters
        </button>
      )}

      {/* Filters Sidebar */}
      {(isSidebarOpen || !isSmallScreen) && (
        <div className="filters-row">
          <div className="filter-section">
            <label>Category:</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className="filter-section">
            <label>Price:</label>
            <select
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <div className="filter-section">
            <label>Level:</label>
            <select
              name="level"
              value={filters.level}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <button className="apply-button" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Filters;
