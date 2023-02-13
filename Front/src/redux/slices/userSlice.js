import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    islogged: false,
    token: null,
    profile: {},
  },
  reducers: {
    login: (state, { payload: { token, profile } }) => {
      state.islogged = true;
      state.token = token;
      state.profile = profile;
      return state;
    },
    logout: (state, { payload }) => {
      state.islogged = false;
      state.token = null;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
