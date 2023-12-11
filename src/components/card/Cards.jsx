
import React from 'react';
import CarCard from './CarCard';
import { useSelector } from 'react-redux';
import css from './CarCard.module.css';

const Cards = ({ renderAllImages }) => {
  const { cars } = useSelector((state) => state.adverts);
  const selectedBrandCatalog = useSelector((state) => state.adverts.filters.selectedBrand);
  const selectedBrandFavorites = useSelector((state) => state.favorites.selectedBrand);
  const favoriteCars = useSelector((state) => state.favorites.favoriteCars);

  const filteredByBrandCatalog = selectedBrandCatalog
    ? cars.filter((car) => car.make === selectedBrandCatalog)
    : cars;

  const filteredByBrandFavorites = selectedBrandFavorites
    ? favoriteCars.filter((car) => car.make === selectedBrandFavorites)
    : favoriteCars;

  const carsToRender = renderAllImages ? filteredByBrandCatalog : filteredByBrandFavorites;

  return (
    <div className={css.cardsContainer}>
      {carsToRender.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cards;