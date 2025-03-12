import React from "react";

function CarDetails({ car, onClose }) {
  return (
    <div>
      <h2>Car Details</h2>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      {car.image && <img src={car.image} alt={`${car.make} ${car.model}`} style={{ maxWidth: "200px" }} />}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CarDetails;
