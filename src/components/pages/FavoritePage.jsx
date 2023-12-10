// FavoritesPage.jsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../card/Cards';
import { fetchAdverts } from '../../redux/operations';
import { SearchBar } from '../searchBar/SearchBar';

const FavoritesPage = () => {
  const favoriteCars = useSelector((state) => state.favorites.favoriteCars);
  const dispatch = useDispatch();
  const [filteredFavoriteCars, setFilteredFavoriteCars] = useState([...favoriteCars]);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [favoriteCars, dispatch]);

  const handleSearch = (selectedBrand) => {
    if (selectedBrand) {
      const filteredCars = favoriteCars.filter((car) => car.make === selectedBrand);
      setFilteredFavoriteCars(filteredCars);
    } else {
      setFilteredFavoriteCars([...favoriteCars]);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div>
        <h2>Favorites</h2>
        <Cards cars={filteredFavoriteCars} renderAllImages={false} />
      </div>
    </>
  );
};

export default FavoritesPage;
