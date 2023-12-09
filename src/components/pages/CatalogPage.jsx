import React from "react";
import Cards from "./../card/Cards";
import { useSelector } from "react-redux";
import { SearchBar } from "../searchBar/SearchBar";

const CatalogPage = () => {
  const cars = useSelector((state) => state.adverts.cars);

  return (
    <>
      <SearchBar />
      <Cards cars={cars} />
    </>
  );
};

export default CatalogPage;
