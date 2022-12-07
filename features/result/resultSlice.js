import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import resultService from './resultService';

//State
const initialState = {
  resultData: null,
  isResultSuccess: false,
  isResultError: false,
  message: '',
};

// Post user's result
export const postResultData = createAsyncThunk(
  'result/postResultData',
  async (result, ThunkAPI) => {
    try {
      return await resultService.postResultData(result);
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

// Update user's result
export const updateResultData = createAsyncThunk(
  'result/updateResultData',
  async (resultData, ThunkAPI) => {
    const { result, year, race } = resultData;
    try {
      return await resultService.updateResultData(result, year, race);
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

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    resetResult: (state) => {
      state.resultData = null;
      state.isResultSuccess = false;
      state.isResultError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder;
    builder.addCase(postResultData.fulfilled, (state, action) => {
      // Add user to the state array
      state.resultData = action.payload;
      state.isResultSuccess = true;
    });
    builder.addCase(updateResultData.fulfilled, (state, action) => {
      // Add user to the state array
      state.resultData = action.payload;
      state.isResultSuccess = true;
    });
  },
});

export const { resetResult } = resultSlice.actions;
export default resultSlice.reducer;
