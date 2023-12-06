import React from "react";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
     const navigate = useNavigate();

    const handleClick = () => {
        navigate("/catalog");
    }
    
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Welcome to Auto Rent</h2>
        <p className={styles.paragraph}>
                  Explore our wide range of rental cars and start your journey with comfort and style.
                  We have cars of various configurations to meet your needs. Use filters by brand, hourly rental price, and mileage to find the perfect car for each journey. Elevate your travel experience with comfort and style!
              </p>
              <button onClick={handleClick} className={styles.btn}>Catalog</button>
      </div>
    </section>
  );
};

export default HomePage;
