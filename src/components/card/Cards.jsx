import React from 'react';
import CarCard from './CarCard';
import { useDispatch, useSelector } from 'react-redux';

const Cards = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.adverts);
  const selectedBrand = useSelector((state) => state.adverts.filters.selectedBrand);
  const filteredCars = selectedBrand
    ? cars.filter((car) => car.make === selectedBrand)
    : cars;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingLeft: '115px',
        paddingRight: '115px',
      }}
    >
      {filteredCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cards;
