import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const addRaceAPI = (data) => {
  axios.post(`${baseURL}/api/race/create`, data);
};
export const racesSlice = createSlice({
  name: 'races',
  initialState: [],
  reducers: {
    loadRaces: (state, { payload }) => {
      state = payload;
      return state;
    },
    addRace: (state, { payload }) => {
      addRaceAPI(payload);
      state.push(payload);
    },
  },
});

export const { addRace, loadRaces } = racesSlice.actions;
