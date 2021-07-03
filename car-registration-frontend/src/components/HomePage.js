import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <Link to="/Check-Plate">License Plate Type</Link>
      <Link to="/Validate-Plate">Check License Plate</Link>
      <Link to="/Registration">Vehicle Registration</Link>
    </div>
  );
}

export default HomePage;
