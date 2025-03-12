import cars from "../data/cars.json"; // Adjust path if necessary

// Function to load cars from localStorage (or initialize it)
export const loadCars = () => {
  if (!localStorage.getItem("cars")) {
    localStorage.setItem("cars", JSON.stringify(cars));
  }
  return JSON.parse(localStorage.getItem("cars"));
};

// Function to save updated cars data to localStorage
export const saveCars = (updatedCars) => {
  localStorage.setItem("cars", JSON.stringify(updatedCars));
};
