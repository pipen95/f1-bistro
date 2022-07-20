import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

//State
const initialState = {
  userData: [],
  message: '',
};

// Signup user
export const getUserData = createAsyncThunk(
  'user/getUserData',
  async (ThunkAPI) => {
    try {
      return await userService.getUserData();
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
      state.userData = [];
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUserData.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
