import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure styles are in App.css

const cars = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm7jJjCHZPVaRZU-UYQHOrpuBnuk2IO2j6vrTokL4A53tz80iG3vND01Qc4csV",
    price: "Rs. 6.49 - 9.64 Lakh",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1SP4uYjLxGk1R775krdFCYrKXU9ZdZ58pA&s",
    price: "Rs. 10.99 - 18.24 Lakh",
  },
  {
    id: 3,
    name: "Tata Nexon",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9977/1683047876204/front-left-side-47.jpg",
    price: "Rs. 8.10 - 15.50 Lakh",
  },
  {
    id: 4,
    name: "Kia Seltos",
    image: "https://imgd.aeplcdn.com/1056x594/n/ima73cb_1726651.jpg?q=80",
    price: "Rs. 10.90 - 20.30 Lakh",
  },
  {
    id: 5,
    name: "Mahindra XUV700",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNQtfQZQvDcbXLtp6hjwT2vB5rR9qcbSt5w&s",
    price: "Rs. 14.03 - 26.57 Lakh",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/car-details/${id}`); // Navigate to Car Details Page
  };

  return (
    <div className="home-page">
      <h1>Welcome to Car's World</h1>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h2>{car.name}</h2>
            <p className="price">{car.price}</p>
            <button onClick={() => handleViewDetails(car.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
