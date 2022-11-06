import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import voteService from './voteService';

//State
const initialState = {
  voteData: null,
  isVoteSuccess: false,
  isVoteError: false,
  message: '',
};

// Get user latest vote
export const getVoteData = createAsyncThunk(
  'vote/getVoteData',
  async (userId, ThunkAPI) => {
    try {
      return await voteService.getVoteData(userId);
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

// Post user's vote
export const postVoteData = createAsyncThunk(
  'vote/postVoteData',
  async (vote, ThunkAPI) => {
    try {
      return await voteService.postVoteData(vote);
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

// Update user's vote
export const updateVoteData = createAsyncThunk(
  'vote/updateVoteData',
  async (voteData, ThunkAPI) => {
    const { vote, voteId } = voteData;
    try {
      return await voteService.updateVoteData(vote, voteId);
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

export const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    resetVote: (state) => {
      state.voteData = null;
      state.isVoteSuccess = false;
      state.isVoteError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder
      .addCase(getVoteData.fulfilled, (state, action) => {
        // Add user to the state array
        state.voteData = action.payload;
        state.isVoteSuccess = true;
      })
      .addCase(getVoteData.rejected, (state, action) => {
        state.isVoteError = true;
        state.message = action.payload;
      });
    builder.addCase(postVoteData.fulfilled, (state, action) => {
      // Add user to the state array
      state.voteData = action.payload;
      state.isVoteSuccess = true;
    });
    builder.addCase(updateVoteData.fulfilled, (state, action) => {
      // Add user to the state array
      state.voteData = action.payload;
      state.isVoteSuccess = true;
    });
  },
});

export const { resetVote } = voteSlice.actions;
export default voteSlice.reducer;
