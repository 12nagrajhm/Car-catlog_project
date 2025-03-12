import { createContext, useState, useEffect } from "react";
import carsData from "../data/cars.json";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const storedCars = localStorage.getItem("cars");
    if (storedCars) {
      setCars(JSON.parse(storedCars));
    } else {
      localStorage.setItem("cars", JSON.stringify(carsData));
      setCars(carsData);
    }
  }, []);

  return (
    <CarContext.Provider value={{ cars, setCars }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarContext;
