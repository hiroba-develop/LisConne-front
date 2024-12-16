import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/ExampleButton/ExampleButton";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <Link to="/login" className="btn">
        <CustomButton label="Go to Login" />
      </Link>
    </div>
  );
};

export default Home;