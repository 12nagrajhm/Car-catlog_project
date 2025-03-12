import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const cars = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQm7jJjCHZPVaRZU-UYQHOrpuBnuk2IO2j6vrTokL4A53tz80iG3vND01Qc4csV",
    price: "Rs. 6.49 - 9.64 Lakh",
    description: "The Maruti Suzuki Swift is a sporty hatchback known for its fuel efficiency and performance.",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1SP4uYjLxGk1R775krdFCYrKXU9ZdZ58pA&s",
    price: "Rs. 10.99 - 18.24 Lakh",
    description: "Hyundai Creta is a premium compact SUV with modern features and a stylish design.",
  },
  {
    id: 3,
    name: "Tata Nexon",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9977/1683047876204/front-left-side-47.jpg",
    price: "Rs. 8.10 - 15.50 Lakh",
    description: "Tata Nexon is a strong and safe compact SUV with a 5-star safety rating.",
  },
  {
    id: 4,
    name: "Kia Seltos",
    image: "https://imgd.aeplcdn.com/1056x594/n/ima73cb_1726651.jpg?q=80",
    price: "Rs. 10.90 - 20.30 Lakh",
    description: "Kia Seltos is a premium SUV packed with smart features and a powerful engine.",
  },
  {
    id: 5,
    name: "Mahindra XUV700",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNQtfQZQvDcbXLtp6hjwT2vB5rR9qcbSt5w&s",
    price: "Rs. 14.03 - 26.57 Lakh",
    description: "Mahindra XUV700 is a luxury SUV with powerful performance and advanced technology.",
  },
];

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <h2>Car not found</h2>;
  }

  return (
    <div className="car-details-container">
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} />
      <p className="price">{car.price}</p>
      <p>{car.description}</p>
      
      {/* Exit Button */}
      <button className="exit-button" onClick={() => navigate("/login")}>Exit</button>
    </div>
  );
};

export default CarDetails;
