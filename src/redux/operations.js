import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65722a3bd61ba6fcc0147b17.mockapi.io";


export const fetchAdverts = createAsyncThunk(
  "cars/fetchAll",
  async (selectedBrand, thunkAPI) => {
    try {
      const response = await axios.get(`/cars${selectedBrand ? `?make=${selectedBrand}` : ''}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchBrends = createAsyncThunk(
  "cars/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/cars");
      const uniqueBrands = [...new Set(response.data.map((car) => car.make))];
      return uniqueBrands;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);


// export const fetchBrends = createAsyncThunk(
//   "cars/fetchBrands",
//   async (selectedBrand, thunkAPI) => {
//     try {
//       const response = await axios.get(`/cars?make=${selectedBrand}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );