import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Login Page</h1>
      <p>This is the login page of the application.</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Login;