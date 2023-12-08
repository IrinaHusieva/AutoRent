import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, fetchBrends } from "./operations";


const initialState = {
  cars: [],
  make: [],
  favorite: false,
  isLoading: false,
  error: '',
  filters: {
  selectedBrand: '', 
  },
}
const handlePending = (state) => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
};

const fetchAllAdverts = (state, { payload }) => {
  state.isLoading = false;
  state.cars = payload;
};

const fetchAllBrands = (state, { payload }) => {
  state.make = [...new Set(payload.map((car) => car.make))];
  // state.filters.selectedBrand = payload
  
}
// const loadMoreAdverts = (state) => {
//   state.displayedCars = state.cars.length;
// };

const carsSlice = createSlice({
  name: "adverts", 
initialState: initialState,
  
  reducers: {
      addFavorite(state, action) {
          state.favorite = action.payload
    },
    setSelectedBrand(state, action) {
      state.filters.selectedBrand = action.payload
    }
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, fetchAllAdverts)
      .addCase(fetchBrends.fulfilled, fetchAllBrands)
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        handlePending
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        handleRejected
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export default carsSlice.reducer;