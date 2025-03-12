import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CarContext } from '../context/CarContext';

const CarDetailsPage = () => {
  const { id } = useParams();
  const { cars } = useContext(CarContext);
  const [car, setCar] = useState(null);

  useEffect(() => {
    const foundCar = cars.find((car) => car.id === parseInt(id));
    setCar(foundCar);
  }, [cars, id]);

  if (!car) {
    return <div>Loading...</div>; // Or a "Car not found" message
  }

  return (
    <div>
      <h1>Car Details</h1>
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      {/* Display other car details here */}
    </div>
  );
};

export default CarDetailsPage;