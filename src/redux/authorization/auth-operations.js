import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'helpers/api';
import { toast } from 'react-toastify';
import axios from 'axios';

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  deleteToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const sighUp = createAsyncThunk(
  'auth/sighUp',
  async (login, thunkAPI) => {
    try {
      const result = await api.performRegistration(login);
      token.setToken(result.token);
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
      token.setToken(result.token);

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
      token.deleteToken();

      toast.success('Logout is success');
      return result;
    } catch (error) {
      toast.error('Logout failed');
      return rejectWithValue(error);
    }
  }
);

export const checkCurrentLogin = createAsyncThunk(
  'auth/testLogin',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    if (state.auth.token === '') {
      return rejectWithValue('no user find');
    }

    token.setToken(state.auth.token);
    try {
      const result = api.getCurrentLogin();
      return result;
    } catch (error) {}
  }
);
