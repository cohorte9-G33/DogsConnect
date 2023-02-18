import { createSlice } from '@reduxjs/toolkit';

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState: [],
  reducers: {
    loadDogs: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { loadDogs } = dogsSlice.actions;
