import React, { useState } from "react";

const Filters = ({ onFilterApply }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    level: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    setIsSidebarOpen(false);
    onFilterApply(filters);
  };

  return (
    <>
      {/* Filter Button - Visible only on smaller screens */}
      <button
        className="toggle-button"
        onClick={() => setIsSidebarOpen(true)}
        style={{ display: window.innerWidth <= 768 ? "inline-block" : "none" }}
      >
        Open Filters
      </button>

      {/* Sidebar - Contains filters */}
      <div className={`filters-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="filters-content">
          <h3>Filters</h3>
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
          <button onClick={applyFilters}>Apply Filters</button>
        </div>
      </div>
    </>
  );
};

export default Filters;
