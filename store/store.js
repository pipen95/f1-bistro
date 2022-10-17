import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import userReducer from 'features/user/userSlice';
import voteReducer from 'features/vote/voteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    vote: voteReducer,
  },
});
