import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrends } from '../../redux/operations';
import { fetchAdverts } from '../../redux/operations';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.adverts.make); 
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
  dispatch(fetchAdverts(selectedBrand));
}, [dispatch, selectedBrand]);


  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setSelectedBrand(selectedBrand); 
    dispatch(fetchBrends(selectedBrand));
  };

  return (
    <div>
      <TextField
        id="filled-select-currency"
        select
        label="Select Brand"
        value={selectedBrand}
        onChange={handleBrandChange}
        variant="filled"
      >
        {brands.map((brand) => (
          <MenuItem key={brand} value={brand}>
            {brand}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
