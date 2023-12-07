import React from 'react';
import CarCard from './CarCard';

import { useDispatch, useSelector } from 'react-redux';


export const Cards = () => {
    const dispatch = useDispatch();
    const { cars } = useSelector((state) => state.adverts);
    
  return (
    cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))
  )
}
