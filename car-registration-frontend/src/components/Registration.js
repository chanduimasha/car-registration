import React from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="Registration">
      <Link to="/Create-Vehicle">Create New Vehicle</Link>
      <Link to="/View-Vehicle">View All Vehicles</Link>
      <Link to="/Update-Vehicle">Update Vehicles</Link>
      <Link to="/Delete-Vehicle">Delete Vehicles</Link>
    </div>
  );
}

export default Registration;
