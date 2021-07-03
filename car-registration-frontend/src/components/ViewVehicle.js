import React, { useEffect, useState } from "react";
import "./ViewVehicle.css";
import axios from "../axios";

function ViewVehicle() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("/task/three/get/details").then((res) => {
        console.log(res.data);
        const response = res.data;
        setData(response);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="ViewVehicle">
      <table className="table">
        <tr>
          <th>Owner Name,</th>
          <th>Plate Number,</th>
          <th>Car Brand,</th>
        </tr>
        {data.map((e) => (
          <tr key={e.index}>
            <td>{e.ownerName}</td>
            <td>{e.plateNumber}</td>
            <td>{e.carBrand}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ViewVehicle;
