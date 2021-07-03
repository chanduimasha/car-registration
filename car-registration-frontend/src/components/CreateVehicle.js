import React, { useEffect, useState } from "react";
import "./CreateVehicle.css";
import axios from "../axios";

function CreateVehicle() {
  const [ownerName, setOwnerName] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [success, setSuccess] = useState(false);

  const register = async (e) => {
    console.log(ownerName + " " + plateNumber + " " + carBrand);
    e.preventDefault();

    await axios
      .post("/task/three/register", {
        ownerName: ownerName,
        plateNumber: plateNumber,
        carBrand: carBrand,
      })
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
      });

    setOwnerName("");
    setPlateNumber("");
    setCarBrand("");
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }, [success]);

  return (
    <div className="CreateVehicle">
      <h1>Vehicle Registration</h1>
      <div className="contain">
        <label>Name</label>
        <input
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          placeholder="Enter Owner Name"
        />
      </div>
      <div className="contain">
        <label>Plate Number</label>
        <input
          value={plateNumber}
          onChange={(e) => setPlateNumber(e.target.value)}
          placeholder="Enter Plate Number"
        />
      </div>
      <div className="contain">
        <label>Car Brand</label>
        <input
          value={carBrand}
          onChange={(e) => setCarBrand(e.target.value)}
          placeholder="Enter Car Brand"
        />
      </div>
      <button className="submit" type="submit" onClick={register}>
        Submit
      </button>
      {success && (
        <p style={{ color: "red" }}>Successfully Registered Vehicle</p>
      )}
    </div>
  );
}

export default CreateVehicle;
