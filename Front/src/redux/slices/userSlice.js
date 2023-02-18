import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const deleteLike = async (UserId, dogId) => axios.patch(`${baseURL}/api/likes/delete`, { UserId, dogId });
const addLike = async (UserId, dogId) => axios.post(`${baseURL}/api/likes/add`, { UserId, dogId });

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    islogged: false,
    token: null,
    likes: [],
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
      state.profile = {};
      return state;
    },
    updateProfile: (state, { payload }) => {
      state.profile = payload;
      return state;
    },
    toggleLikes: (state, { payload }) => {
      const inLikes = state.likes.includes(payload);
      const index = state.likes.indexOf(payload);
      if (!inLikes) {
        state.likes.push(payload);
        addLike(state.profile.id, payload);
      } else {
        state.likes.splice(index, 1);
        deleteLike(state.profile.id, payload);
      }
      return state;
    },
    loadLikes: (state, { payload }) => {
      state.likes = payload;
      return state;
    },
  },
});

export const { loadLikes, login, logout, toggleLikes, updateProfile } = userSlice.actions;
