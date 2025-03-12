import React from "react";

const cars = [
  { id: 1, name: "BMW", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Mercedes", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Tesla", image: "https://via.placeholder.com/150" },
];

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Car Catalogue</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {cars.map((car) => (
          <div key={car.id} style={{ border: "1px solid black", padding: "10px" }}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
