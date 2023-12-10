
import carsReducer from './cars.slice';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer, {loadFavorites} from './favoritesSlice'


const preloadedState = {
  favorites: {
    favoriteCars: loadFavorites(),
  },
};

export const store = configureStore({
  reducer: {
    adverts: carsReducer,
    favorites: favoritesReducer,
  },
  preloadedState,
});