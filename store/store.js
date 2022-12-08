import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import userReducer from 'features/user/userSlice';
import voteReducer from 'features/vote/voteSlice';
import resultReducer from 'features/result/resultSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    vote: voteReducer,
    result: resultReducer,
  },
});
