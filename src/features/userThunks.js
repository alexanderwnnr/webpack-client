import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { login, setStatus, setError } from './userSlice'; // Импортируйте действия из слайса

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setStatus('loading'));
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      dispatch(login(response.data));
      dispatch(setStatus('succeeded'));

      // Вернуть данные при успешном запросе
      return response.data;
    } catch (error) {
      // Отправить ошибку с помощью rejectWithValue, чтобы получить её в extraReducers
      dispatch(setError(error.response?.data?.message || 'Something went wrong'));
      return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  }
);
