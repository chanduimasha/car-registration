import React from "react";
import "./CheckPlate.css";

function CheckPlate() {
  return (
    <div className="CheckPlate">
      <h1>Check License Plate Type</h1>
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

export default CheckPlate;
