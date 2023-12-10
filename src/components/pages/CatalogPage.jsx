// CatalogPage.jsx
import Cards from "./../card/Cards";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from "../searchBar/SearchBar";
import { fetchAdverts } from "../../redux/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.adverts.cars);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <Cards cars={cars} renderAllImages={true} />
    </>
  );
};

export default CatalogPage;
