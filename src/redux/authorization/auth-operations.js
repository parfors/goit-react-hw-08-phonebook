import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'helpers/api';
import { toast } from 'react-toastify';

export const sighUp = createAsyncThunk(
  'auth/sighUp',
  async (login, thunkAPI) => {
    try {
      const result = await api.performRegistration(login);
      toast.success('User registered successfully');
      return result;
    } catch (error) {
      toast.error('Ups something went wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (login, { rejectWithValue }) => {
    try {
      const result = await api.performLogIn(login);
      toast.success('Logging success');
      return result;
    } catch (error) {
      toast.error('Logging failed');
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.performLogOut();
      toast.success('Logout is success');
      return result;
    } catch (error) {
      toast.error('Logout failed');
      return rejectWithValue(error);
    }
  }
);
