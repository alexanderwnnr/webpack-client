// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './userThunks';

const initialState = {
  currentUser: null,
  status: 'idle',
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.status = 'succeeded';
    },
    logout: (state) => {
      state.currentUser = null;
      state.status = 'idle';
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      });
  }
});

export const { login, logout, setStatus, setError } = userSlice.actions;
export default userSlice.reducer;
