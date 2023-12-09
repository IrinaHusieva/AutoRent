import React from 'react';
import CarCard from './CarCard';
import { useSelector } from 'react-redux';
import css from './CarCard.module.css'

const Cards = () => {
  const { cars } = useSelector((state) => state.adverts);
  const selectedBrand = useSelector((state) => state.adverts.filters.selectedBrand);
  const filteredCars = selectedBrand
    ? cars.filter((car) => car.make === selectedBrand)
    : cars;

  return (
    <div className={css.cardsContainer}>
  {filteredCars.map((car) => (
    <CarCard key={car.id} car={car} />
  ))}
</div>
  );
};

export default Cards;
