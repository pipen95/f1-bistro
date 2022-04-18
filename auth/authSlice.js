import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import axios from 'axios';
axios.defaults.withCredentials = true;

// Get user from cookie (Server Side)
//Check user
const API_URL = 'http://localhost:3001/api/users';
let user;
const check = async () => {
  try {
    const res = await axios.get(`${API_URL}/check`, {
      withCredentials: true,
    });
    if (res.data) {
      return (user = true);
    }
  } catch (error) {
    if (error.response.status === 401) {
      return (user = false);
    }
  }
};
check();

console.log(user);

//State
const initialState = {
  user: user ? user : false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Signup user
export const signup = createAsyncThunk(
  'auth/signup',
  async (user, ThunkAPI) => {
    try {
      return await authService.signup(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return ThunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk('auth/login', async (user, ThunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return ThunkAPI.rejectWithValue(message);
  }
});

// Login user
export const passwordreset = createAsyncThunk(
  'auth/passwordreset',
  async (user, ThunkAPI) => {
    try {
      return await authService.passwordreset(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return ThunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const emailreset = createAsyncThunk(
  'auth/emailreset',
  async (user, ThunkAPI) => {
    try {
      return await authService.emailreset(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return ThunkAPI.rejectWithValue(message);
    }
  }
);

// Logout user
export const logout = createAsyncThunk('auth/logout', async (ThunkAPI) => {
  try {
    return await authService.logout();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return ThunkAPI.rejectWithValue(message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = false;
      })
      .addCase(passwordreset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(passwordreset.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(passwordreset.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = false;
      })
      .addCase(emailreset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emailreset.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(emailreset.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
