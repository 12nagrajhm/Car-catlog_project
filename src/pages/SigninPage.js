import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Here, you can check authentication logic before navigating
    navigate("/home"); // Redirect to home after sign-in
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign In</h2>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button onClick={handleSignIn}>Sign In</button>
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignInPage;
