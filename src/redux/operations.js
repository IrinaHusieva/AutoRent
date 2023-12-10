import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65722a3bd61ba6fcc0147b17.mockapi.io";


export const fetchAdverts = createAsyncThunk(
  "cars/fetchAll",
  async ({ filters, page = 1 }, thunkAPI) => {
    try {
      const params = { ...filters, page, limit: 12 };
      const response = await axios.get("/cars", { params });
      const fetchedAdverts = response.data;
      const currentState = thunkAPI.getState();
      const currentCards = currentState.adverts.cars;

      const updatedCards = [
        ...currentCards.filter((card) => !fetchedAdverts.find((newCard) => newCard.id === card.id)),
        ...fetchedAdverts,
      ];

      return updatedCards;
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

export const setSelectedPriceRange = createAction("cars/setSelectedPriceRange");

