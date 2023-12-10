import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, fetchBrends } from "./operations";


const initialState = {
  name:'adverts',
  cars: [],
  make: [],
  favorite: false,
  isLoading: false,
  page: 1,
  error: '',
  filters: {
    selectedBrand: '', 
    selectedPriceRange: "",
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


const carsSlice = createSlice({
  name: "adverts", 
initialState: initialState,
  
  reducers: {
      addFavorite(state, action) {
          state.favorite = action.payload
    },
     setSelectedBrand: (state, action) => {
      state.filters.selectedBrand = action.payload;
    },
      setSelectedPriceRange: (state, action) => {
      state.filters.selectedPriceRange = action.payload;
    },
      updatePage: (state, action) => {
      state.page = action.payload;
    },
    },
   extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBrends.fulfilled, (state, action) => {
        state.make = action.payload;
      })
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
export const { updatePage } = carsSlice.actions;