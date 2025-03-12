import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CarDetails from "./pages/CarDetails";
import "./App.css"; // Import Styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
