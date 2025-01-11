import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coursepage from "./Pages/CoursePage/Coursepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Coursepage />} />
      </Routes>
    </Router>
  );
}

export default App;
