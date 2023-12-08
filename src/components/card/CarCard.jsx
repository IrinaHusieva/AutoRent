import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
  return (
    <div style={{ flex: '1', maxWidth: '274px', marginTop: '50px' }}>
      <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <img src={car.img} alt={car.model} style={{ maxWidth: '274px', height: '268px',  objectFit: 'cover', objectPosition: 'center', }} />
        <CardContent style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Typography variant="h5" component="div">
            {car.make} {car.model} {car.rentalPrice}
          </Typography>
          <Typography color="text.secondary">{city} <DividerSvg /> {country} <DividerSvg /> {car.rentalCompany} <DividerSvg /> {car.type} <DividerSvg /> {car.model} <DividerSvg /> {car.id} <DividerSvg /> {car.functionalities[0] }</Typography>
          <Button variant="contained" style={{backgroundColor: '#3470FF'}}>Learn more</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarCard;
