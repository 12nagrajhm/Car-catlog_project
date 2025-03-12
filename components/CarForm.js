import React, { useState, useEffect } from "react";

function CarForm({ addCar, updateCar, editCar, onClose }) {
  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (editCar) {
      setCar(editCar);
    } else {
      setCar({ make: "", model: "", year: "", price: "", image: "" });
    }
  }, [editCar]);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editCar) {
      updateCar(car);
    } else {
      addCar(car);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="make"
        placeholder="Make"
        value={car.make}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={car.model}
        onChange={handleChange}
      />
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={car.year}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={car.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL (Optional)"
        value={car.image}
        onChange={handleChange}
      />
      <button type="submit">{editCar ? "Update" : "Add"} Car</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}

export default CarForm;
