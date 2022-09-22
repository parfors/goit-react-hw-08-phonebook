import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from 'redux/authorization/auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [authOperations.sighUp.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.sighUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
    },
    [authOperations.sighUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.logIn.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.logIn.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
    },
    [authOperations.logIn.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.logOut.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [authOperations.logOut.fulfilled]: state => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user.name = '';
      state.user.email = '';
      state.token = '';
    },
    [authOperations.logOut.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authOperations.checkCurrentLogin.pending]: state => {
      state.loading = true;
    },
    [authOperations.checkCurrentLogin.fulfilled]: (state, { payload }) => {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [authOperations.checkCurrentLogin.rejected]: state => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
