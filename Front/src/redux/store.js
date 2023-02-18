import { configureStore } from '@reduxjs/toolkit';
import { dogsSlice, racesSlice, userSlice } from './slices';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    races: racesSlice.reducer,
    dogs: dogsSlice.reducer,
  },
});
