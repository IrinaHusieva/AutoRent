
import Cards from "./../card/Cards";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from "../searchBar/SearchBar";
import { fetchAdverts } from "../../redux/operations";
import {updatePage} from '../../redux/cars.slice'

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.adverts.cars);
  const page = useSelector((state) => state.adverts.page);
  const filters = useSelector((state) => state.adverts.filters.selectedBrand);


  const handleSearch = (newFilters) => {
    dispatch(updatePage(1));  
    dispatch(fetchAdverts({ ...newFilters, page: 1 }));
  };

  const handleLoadMore = () => {
    dispatch(updatePage(page + 1)); 
    dispatch(fetchAdverts({ ...filters, page: page + 1 }));
  };

   useEffect(() => {
  dispatch(fetchAdverts(filters));
}, [dispatch, filters, page]);


  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Cards cars={cars} renderAllImages={true} />
       <button onClick={handleLoadMore}>Load more</button>
    </>
  );
};

export default CatalogPage;
