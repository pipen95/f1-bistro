import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

//State
const initialState = {
  userData: null,
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
    resetUser: (state) => {
      state.userData = null;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUserData.fulfilled, (state, action) => {
      // Add user to the state array
      state.userData = action.payload.data.doc;
    });
  },
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
