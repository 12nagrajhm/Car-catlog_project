import React from "react";

function CarList({ cars, showDetails, showForm, deleteCar }) {
  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} ({car.year}) - ${car.price}
            <button onClick={() => showDetails(car)}>Details</button>
            <button onClick={() => showForm(car)}>Edit</button>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;