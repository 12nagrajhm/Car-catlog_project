// src/pages/HomePage.jsx
import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import CarList from '../components/CarList';
import SearchFilter from '../components/SearchFilter';

const HomePage = () => {
    const { cars } = useContext(CarContext);
    console.log('HomePage - cars:', cars);


  return (
    <div>
      <h1>Welcome to the Car Catalogue</h1>
      <SearchFilter />
      <CarList cars={cars} />
    </div>
  );
};

export default HomePage;