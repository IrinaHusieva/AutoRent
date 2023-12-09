

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './CarCard.module.css';

const DividerSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16" fill="none">
    <path d="M1 0V16" stroke="#121417" strokeOpacity="0.1"/>
  </svg>
);

const getAddressParts = (address) => {
  const addressParts = address.split(',');
  const city = addressParts[1] ? addressParts[1].trim() : '';
  const country = addressParts[2] ? addressParts[2].trim() : '';
  return { city, country };
};

const CarCard = ({ car }) => {
  const { city, country } = getAddressParts(car.address);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        {car.img && !imageError ? (
          <img
            src={car.img}
            alt={car.model}
            className={styles.img}
            onError={handleImageError}
          />
        ) : (
          <div className={styles.placeholder}>
            {imageError ? 'Failed to load image' : 'No Image'}
          </div>
        )}

        <CardContent className={styles.cardContent}>
          <h2 className={styles.txt} variant="h5" component="div">
            {car.make} {car.model} {car.rentalPrice}
          </h2>
          <p className={styles.minidescr} color="text.secondary">
            {city} <DividerSvg /> {country} <DividerSvg /> {car.rentalCompany} <DividerSvg /> {car.type} <DividerSvg /> {car.model} <DividerSvg /> {car.id} <DividerSvg /> {car.functionalities[0]}
          </p>
        </CardContent>
          <button type='button' className={styles.btn}>
            Learn more
          </button>
      </Card>
    </div>
  );
};

export default CarCard;
