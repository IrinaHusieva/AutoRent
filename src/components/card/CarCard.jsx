import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CarCard = ({ car }) => {
  return (
    <Card>
      <img src={car.img} alt={car.model} style={{ maxWidth: '100%', height: 'auto' }} />
      <CardContent>n
        <Typography variant="h5" component="div">
          {car.make} {car.model}
        </Typography>
        <Typography color="text.secondary">{car.description}</Typography>
        {/* Add other details as needed */}
      </CardContent>
    </Card>
  );
};

export default CarCard;
