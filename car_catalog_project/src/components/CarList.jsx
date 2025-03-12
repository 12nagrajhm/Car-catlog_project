import React, { useState } from "react";
import CarItem from "./CarItem";
import SearchFilter from "./SearchFilter";
import "../styles/CarList.css";

const carsData = [
  { id: 1, brand: "Toyota", model: "Camry", year: 2022, fuelType: "Petrol", price: 30000 },
  { id: 2, brand: "Honda", model: "Civic", year: 2021, fuelType: "Diesel", price: 28000 },
  { id: 3, brand: "Ford", model: "Mustang", year: 2023, fuelType: "Petrol", price: 50000 },
];

const CarList = () => {
  const [filteredCars, setFilteredCars] = useState(carsData);

  const handleFilter = (searchTerm) => {
    const filtered = carsData.filter((car) =>
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div className="car-list">
      <SearchFilter onFilter={handleFilter} />
      <div className="car-grid">
        {filteredCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
