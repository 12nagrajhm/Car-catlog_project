import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarList from "./components/CarList";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <h2>Dashboard (Protected Route)</h2>
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
