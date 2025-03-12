import React from "react";
import "../styles/CarItem.css";

const CarItem = ({ car }) => {
  return (
    <div className="car-item">
      <h3>{car.brand} {car.model}</h3>
      <p>Year: {car.year} | Fuel: {car.fuelType} | Price: ${car.price}</p>
      <button className="favorite-btn">☆ Add to Favorites</button>
    </div>
  );
};

export default CarItem;
