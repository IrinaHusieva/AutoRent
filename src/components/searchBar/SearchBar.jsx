import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrends, fetchAdverts } from '../../redux/operations';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.adverts.make);
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
    dispatch(fetchBrends());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAdverts(selectedBrand));
  }, [dispatch, selectedBrand]);

  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setSelectedBrand(selectedBrand);
  };

  return (
    <div>
      <TextField
        id="filled-select-currency"
        select
        label="Car brand"
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
