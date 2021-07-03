import React from "react";
import "./ValidatePlate.css";

function ValidatePlate() {
  return (
    <div className="ValidatePlate">
      <h1>Check License Plate is Valid</h1>
      <input
        // value={input}
        // onChange={(e) => setInput(e.target.value)}
        placeholder="Enter License Plate Number"
      />
      <button className="submit" type="submit">
        Submit
      </button>
    </div>
  );
}

export default ValidatePlate;
