// src/App.js
import React, { useState, useEffect } from "react";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import CarDetails from "./components/CarDetails";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  const [cars, setCars] = useState();
  const [selectedCar, setSelectedCar] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editCar, setEditCar] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedCars = localStorage.getItem("cars");
    let parsedCars = [] ;

    if (storedCars !== null && typeof storedCars === "string" && storedCars.trim() !== "") {
      try {
        parsedCars = JSON.parse(storedCars);
      } catch (error) {
        console.error("Error parsing 'cars' from localStorage:", error);
        // If parsing fails, we'll use an empty array
        parsedCars = [] ;
      }
    }

    setCars(parsedCars);
  },);

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  const addCar = (car) => {
    const newCar = { ...car, id: Date.now() };
    setCars([...cars, newCar]);
    setIsFormVisible(false);
  };

  const updateCar = (updatedCar) => {
    const updatedCars = cars.map((car) =>
      car.id === updatedCar.id ? updatedCar : car
    );
    setCars(updatedCars);
    setIsFormVisible(false);
    setEditCar(null);
  };

  const deleteCar = (id) => {
    const filteredCars = cars.filter((car) => car.id !== id);
    setCars(filteredCars);
    setSelectedCar(null);
  };

  const showDetails = (car) => {
    setSelectedCar(car);
  };

  const showForm = (carToEdit = null) => {
    setEditCar(carToEdit);
    setIsFormVisible(true);
  };

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  if (!loggedInUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <h1>Car Catalogue</h1>
      <p>Welcome, {loggedInUser}!</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => showForm()}>Add Car</button>
      {isFormVisible && (
        <CarForm
          addCar={addCar}
          updateCar={updateCar}
          editCar={editCar}
          onClose={() => {
            setIsFormVisible(false);
            setEditCar(null);
          }}
        />
      )}
      <div className="car-list">
        <CarList
          cars={cars}
          showDetails={showDetails}
          showForm={showForm}
          deleteCar={deleteCar}
        />
      </div>
      {selectedCar && (
        <div className="car-details">
          <CarDetails car={selectedCar} onClose={() => setSelectedCar(null)} />
        </div>
      )}
    </div>
  );
}

export default App;