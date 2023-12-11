import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrends, fetchAdverts } from '../../redux/operations';
import { updatePage } from '../../redux/cars.slice';


export const SearchBar = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.adverts.make);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [priceRange, setPriceRange] = useState([30, 500]);

  useEffect(() => {
    dispatch(fetchBrends());
  }, [dispatch]);



  useEffect(() => {
    dispatch(fetchAdverts(selectedBrand, priceRange, selectedPriceRange));
  }, [dispatch, selectedBrand, priceRange, selectedPriceRange]);

  const handleBrandChange = (event, value) => {
    dispatch(setSelectedBrand(value));
    dispatch(updatePage(1)); 
  };

  const handlePriceChange = (event, value) => {
    dispatch(setSelectedPriceRange(value));

    const [min, max] = value.split('-').map(Number);
    setPriceRange([min, max]);
  };

  const priceOptions = Array.from({ length: 48 }, (_, index) => 30 + index * 10);

  return (
    <div>
      <Autocomplete
        id="car-brand-autocomplete"
        options={brands}
        value={selectedBrand}
        onChange={handleBrandChange}
        renderInput={(params) => (
          <TextField {...params} label="Car brand" variant="filled" style={{ width: '200px', margin: '10px' }} />
        )}
      />

      <Autocomplete
        id="price-range-autocomplete"
        options={priceOptions.map((price) => `${price}-${price + 10}`)}
        value={selectedPriceRange}
        onChange={handlePriceChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Price/1 hour"
            variant="filled"
            style={{ width: '200px', margin: '10px' }}
            InputLabelProps={{ shrink: true }}
          />
        )}
        getOptionLabel={(option) => option.split('-')[0]}
      />
    </div>
  );
};