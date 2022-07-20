import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

//State
const initialState = {
  userData: null,
  message: '',
};

// Signup user
export const getUser = createAsyncThunk(
  'features/user/getuser',
  async (ThunkAPI) => {
    try {
      return await userService.getUserData(userData);
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
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.userData = null;
      state.message = '';
    },
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
